// CDP inspector — connects to chrome on :9222 and prints computed styles
// + font load status as plain key=value lines (no JSON, no heredoc).
const list = await (await fetch("http://localhost:9222/json")).json();
const page = list.find((x) => x.type === "page" && x.url.includes("5173"));
if (!page) {
  console.log("RESULT no-page-target");
  process.exit(1);
}
const ws = new WebSocket(page.webSocketDebuggerUrl);
let id = 0;
const pending = new Map();
ws.addEventListener("message", (ev) => {
  const m = JSON.parse(ev.data);
  if (m.id && pending.has(m.id)) {
    pending.get(m.id)(m.result);
    pending.delete(m.id);
  }
});
const send = (method, params = {}) =>
  new Promise((r) => {
    const i = ++id;
    pending.set(i, r);
    ws.send(JSON.stringify({ id: i, method, params }));
  });
await new Promise((res, rej) => {
  ws.addEventListener("open", res);
  ws.addEventListener("error", rej);
});
await send("Runtime.enable");

const expr = `
(function () {
  var lines = [];
  function add(k, v) { lines.push(k + "=" + v); }
  function cs(sel, prop) {
    var el = document.querySelector(sel);
    if (!el) return "MISSING";
    return getComputedStyle(el)[prop];
  }
  add("fraunces_loaded", document.fonts.check("40px Fraunces"));
  add("geist_loaded", document.fonts.check("16px Geist"));
  add("geistmono_loaded", document.fonts.check("14px 'Geist Mono'"));
  add("fonts_count", document.fonts.size);
  add("h1_font", cs(".hero-title", "fontFamily"));
  add("h1_size", cs(".hero-title", "fontSize"));
  add("h1_weight", cs(".hero-title", "fontWeight"));
  add("nav_display", cs(".nav-inner", "display"));
  add("hero_inner_display", cs(".hero-inner", "display"));
  add("proof_display", cs(".hero-proof", "display"));
  add("parksafe_bg", cs(".parksafe-hl", "backgroundColor"));
  add("parksafe_radius", cs(".parksafe-hl", "borderRadius"));
  add("container_max", cs(".container", "maxWidth"));
  add("statvalue_font", cs(".stat-value", "fontFamily"));
  add("statvalue_size", cs(".stat-value", "fontSize"));
  add("root_kids", (document.getElementById("root") || {}).childElementCount);
  add("body_bg", getComputedStyle(document.body).backgroundColor);
  // count actually-loaded font families
  var loaded = [];
  document.fonts.forEach(function (f) { if (f.status === "loaded") loaded.push(f.family); });
  add("loaded_families", loaded.join("|") || "NONE");
  return lines.join("\\n");
})()
`;
const r = await send("Runtime.evaluate", {
  expression: expr,
  returnByValue: true,
});
console.log("RESULT-START");
console.log(r.result.value);
console.log("RESULT-END");
ws.close();
