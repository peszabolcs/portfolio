import { useEffect, useRef } from "react";

// Animated count-up for stat values. Parses the first numeric token in the
// string (e.g. "4 300+", "Top 48", "675 000+", "5.0", "6+ év") and counts it
// up when scrolled into view, preserving any prefix/suffix. Non-numeric values
// (e.g. "iOS + Android") render unchanged. SSR/no-JS shows the final value.
export default function Counter({ value, duration = 1300, className, style }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const str = String(value);
    const m = str.match(/([0-9][0-9\s.,]*[0-9]|[0-9])/);
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!m || reduce) return; // leave the static final value in place

    const numStr = m[0];
    const prefix = str.slice(0, m.index);
    const suffix = str.slice(m.index + numStr.length);
    const isDecimal = /^\d+[.,]\d+$/.test(numStr);
    const grouped = /\s/.test(numStr);
    const decimals = isDecimal ? numStr.split(/[.,]/)[1].length : 0;
    const target = isDecimal
      ? parseFloat(numStr.replace(",", "."))
      : parseInt(numStr.replace(/\s/g, ""), 10);

    const fmt = (n) => {
      if (decimals) return prefix + n.toFixed(decimals) + suffix;
      let s = Math.round(n).toString();
      if (grouped) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return prefix + s + suffix;
    };

    let raf = 0;
    let started = false;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = fmt(target * easeOut(p));
        if (p < 1) raf = requestAnimationFrame(tick);
        else el.textContent = fmt(target);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    el.textContent = fmt(0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  );
}
