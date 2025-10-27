# 📊 SEO Rangsorolás Követése - Útmutató

## 🎯 Hogyan Tudom, Hogy Előkelő Helyen Vagyok?

---

## 1. 🔍 Google Search Console (LEGFONTOSABB!)

Ez a **legmegbízhatóbb** eszköz, amit a Google biztosít ingyen.

### Beállítás:
1. Menj ide: https://search.google.com/search-console
2. Add hozzá: **perjesidev.hu**
3. Erősítsd meg a domain tulajdonjogot (DNS vagy HTML file)
4. Várj 2-3 napot, hogy adatokat gyűjtsön

### Mit látsz itt:
- **Keresési kifejezések** amikre megtalálnak
- **Pozíciók** (pl. 1-10, 11-20, stb.)
- **Kattintások száma**
- **Megjelenések száma**
- **CTR (Click-Through Rate)**

### Példa:
```
Keresési kifejezés         | Pozíció | Kattintások | Megjelenések
---------------------------|---------|-------------|-------------
perjési szabolcs           |   1.2   |     45      |     120
react fejlesztő szeged     |   8.5   |     12      |     89
webfejlesztő szeged        |  15.3   |      3      |     67
```

**Ez az egyetlen eszköz, ami TÉNYLEG tudja, hol állsz a Google-ben!**

---

## 2. 🔎 Manuális Keresés (Inkognitó módban!)

### FONTOS: Mindig inkognitó módban keress!
- Chrome: `Ctrl + Shift + N` (Windows) vagy `Cmd + Shift + N` (Mac)
- Firefox: `Ctrl + Shift + P`
- Safari: `Cmd + Shift + N`

**Miért?** Mert a Google személyre szabja a találatokat:
- Ha már többször rákattintottál az oldaladra → előbbre mutatja
- Helymeghatározás alapján
- Keresési előzmények alapján

### Keresendő Kulcsszavak:

#### 1. Neved:
```
"perjési szabolcs"
"perjési szabolcs webfejlesztő"
```
→ **Cél: 1-3. hely**

#### 2. Szakma + Város:
```
"react fejlesztő szeged"
"webfejlesztő szeged"
"full-stack developer szeged"
"ui ux designer szeged"
```
→ **Cél: 1-10. hely (első oldal)**

#### 3. Szolgáltatás:
```
"weboldal készítés szeged"
"landing page készítés magyarország"
"mobilalkalmazás fejlesztés szeged"
```
→ **Cél: 1-20. hely (első 2 oldal)**

#### 4. Hosszú farok kulcsszavak:
```
"react typescript fejlesztő"
"sveltekit fejlesztő magyarország"
"django python backend fejlesztő"
```
→ **Cél: 1-15. hely**

---

## 3. 🛠️ Ingyenes Rank Checker Eszközök

### A) Ahrefs Webmaster Tools (INGYENES!)
**Link:** https://ahrefs.com/webmaster-tools

**Mit ad:**
- Backlink profil
- Organikus kulcsszavak
- Pozíciók
- Domain Rating (DR)

**Beállítás:**
1. Regisztrálj ingyen
2. Add hozzá a weboldaladat
3. Erősítsd meg (HTML tag vagy DNS)

### B) Google PageSpeed Insights
**Link:** https://pagespeed.web.dev/

**Mit tesztel:**
- Oldal sebesség (mobilon és desktopon)
- SEO technikai elemek
- Accessibility
- Best practices

**Cél pontszám: 90+ mindenhol!**

### C) Ubersuggest (Neil Patel)
**Link:** https://neilpatel.com/ubersuggest/

**Mit ad (limitált ingyen verzió):**
- Domain overview
- Top kulcsszavak
- Pozíció változások
- Backlink javaslatok

---

## 4. 📈 Google Analytics (Organikus forgalom)

Ha hozzáadod a Google Analytics-et:

```html
<!-- Add ezt az index.html-hez a </head> előtt -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Mit látsz:**
- **Acquisition → Traffic Acquisition → Organic Search**
  - Mennyien jönnek Google-ből
  - Milyen kulcsszavakra (korlátozott adat)
  - Mennyi időt töltenek az oldalon

**Ha nő az organikus forgalom = jól megy az SEO!**

---

## 5. 🎯 Konkrét Monitoring Stratégia

### Heti Ellenőrzés (Első 3 Hónapban):

**1. Google Search Console** (hetente egyszer)
- Acquisition → Search Results
- Nézd meg az új keresési kifejezéseket
- Ellenőrizd a pozíció változásokat
- Tekintsd meg a kattintási arányt (CTR)

**2. Manuális Keresés** (hetente egyszer, inkognitó!)
```
✓ "perjési szabolcs"
✓ "react fejlesztő szeged"
✓ "webfejlesztő szeged"
✓ "full-stack developer szeged"
```
Készíts egy Excel táblázatot:
```
Dátum      | Kulcsszó                  | Pozíció
-----------|---------------------------|--------
2025-10-21 | perjési szabolcs          | -
2025-10-21 | react fejlesztő szeged    | -
2025-10-28 | perjési szabolcs          | 5
2025-10-28 | react fejlesztő szeged    | 12
```

**3. Indexelés Ellenőrzése**
Google keresés:
```
site:perjesidev.hu
```
→ Meg kell jelenjen az oldalad!

---

## 6. ⏱️ Várható Időtáv

**FONTOS: Az SEO NEM azonnali!**

### 1-2 Hét:
- ✅ Oldal indexelve van (`site:perjesidev.hu`)
- ✅ Nevedre keresve már megjelensz (pl. "perjési szabolcs")

### 3-4 Hét:
- 🟡 Kezdesz megjelenni általános kulcsszavakra (pl. 20-50. hely)
- 🟡 "webfejlesztő szeged" → talán 15-30. hely

### 2-3 Hónap:
- 🟢 Jobb pozíciók (5-15. hely)
- 🟢 Több keresési kifejezés
- 🟢 Organikus forgalom növekszik

### 6+ Hónap:
- 🚀 Top 5 pozíciók versenyképes kulcsszavakra
- 🚀 Stabil organikus forgalom

---

## 7. 🚀 Gyorsítsd Fel a Folyamatot

### A) Backlink Építés (LEGFONTOSABB!)
Minél több minőségi link mutat az oldaladra, annál előbb kerülsz előre.

**Hova tegyél linkeket:**
1. **LinkedIn profil** → "Weboldal" mezőbe: https://perjesidev.hu
2. **GitHub profil** → Bio és README-ben: https://perjesidev.hu
3. **Facebook profil** → Website
4. **Twitter/X bio**
5. **Freelancer platformok:**
   - Upwork → Portfolio link
   - Fiverr → Profile link
   - Freelancer.com

### B) Tartalom Írás (Blog)
Ha később készítesz blogot:
- "React vs SvelteKit - Melyiket válaszd 2025-ben?"
- "Így készíts reszponzív weboldalt 2025-ben"
- "TOP 10 UI/UX tipp kezdőknek"

→ Ezek organikus forgalmat hoznak!

### C) Google My Business (Helyi SEO)
Ha szeretnél helyi keresésekben is megjelenni:
1. Google My Business profil létrehozása
2. Kategória: "Web Designer" vagy "Software Company"
3. Cím: Szeged
4. Kérj véleményeket ügyfelektől!

### D) Social Media Aktívitás
- LinkedIn posztok (heti 2-3)
- GitHub project-ek
- Dev.to cikkek magyar nyelven

---

## 8. 📊 Mit Jelent a "Jó Pozíció"?

### Pozíció vs. Kattintások:
```
Pozíció    | CTR (átlagosan)
-----------|----------------
1. hely    | 28-35%
2. hely    | 15-20%
3. hely    | 10-12%
4-5. hely  | 7-9%
6-10. hely | 3-5%
11-20. hely| 1-2%
```

**Cél: Első 5 hely a fontos kulcsszavakra!**

---

## 9. 🔔 Értesítések Beállítása

### Google Search Console Email Értesítések:
1. Search Console → Settings → Users and permissions
2. Engedélyezd az email értesítéseket:
   - Critical site issues
   - Search performance
   - Manual actions

### Google Alerts:
1. Menj ide: https://www.google.com/alerts
2. Hozz létre alerteket:
   - "perjési szabolcs"
   - "perjesidev.hu"

→ Kapsz emailt, ha valaki említi a neved vagy az oldaladat!

---

## 10. ✅ Heti Checklist

### Minden Hétfőn:
- [ ] Nézd meg a Google Search Console új adatait
- [ ] Ellenőrizd 3-5 kulcsszó pozícióját (inkognitó)
- [ ] Nézd meg az Analytics organikus forgalmát
- [ ] Ellenőrizd, hogy van-e új backlink (Ahrefs)

### Minden Hónapban:
- [ ] Frissítsd az Excel táblázatot pozíciókkal
- [ ] Futtass PageSpeed tesztet
- [ ] Ellenőrizd a sitemap indexelését
- [ ] Írj új tartalmat vagy LinkedIn posztot

---

## 11. 🎯 Első 30 Nap Akcióterv

### 1. Nap (Deploy után):
- [ ] Google Search Console beállítása
- [ ] Sitemap feltöltése
- [ ] "Request Indexing" kérése
- [ ] Google Analytics hozzáadása

### 3. Nap:
- [ ] Ellenőrizd: `site:perjesidev.hu` → indexelve?
- [ ] Backlink hozzáadása: LinkedIn, GitHub

### 7. Nap:
- [ ] Első pozíció ellenőrzés (inkognitó)
- [ ] Search Console adatok nézése

### 14. Nap:
- [ ] Pozíciók újra ellenőrzése
- [ ] Új backlink-ek hozzáadása (Upwork, Fiverr)

### 30. Nap:
- [ ] Teljes SEO audit (PageSpeed, Schema validator)
- [ ] Pozíció tracking táblázat frissítése
- [ ] Új kulcsszavak azonosítása Search Console-ból

---

## 📞 Gyors Összefoglaló

**Hogy tudom ellenőrizni a pozíciómat?**
1. ✅ **Google Search Console** → "Performance" tab (LEGFONTOSABB)
2. ✅ **Inkognitó manuális keresés** → Gyors check
3. ✅ **Ahrefs Webmaster Tools** → Backlink + pozíció tracking
4. ✅ **Google Analytics** → Organikus forgalom

**Mikor látok eredményt?**
- 1-2 hét: Nevedre már megjelensz
- 3-4 hét: Általános kulcsszavakra is
- 2-3 hónap: Top 10 pozíciók

**Mit tegyek most?**
1. Deploy az oldalt
2. Google Search Console beállítása
3. Backlink-ek hozzáadása (LinkedIn, GitHub)
4. Heti monitoring indítása

---

## 🎉 Kezdésként:

1. **Deploy után azonnal:**
   ```bash
   # Ellenőrizd:
   site:perjesidev.hu
   ```

2. **Regisztrálj itt:**
   - https://search.google.com/search-console
   - https://analytics.google.com
   - https://ahrefs.com/webmaster-tools

3. **Hozz létre Excel táblát:**
   | Dátum | Kulcsszó | Pozíció | Megjegyzés |
   |-------|----------|---------|------------|

4. **Kezdj el backlink-eket építeni!**

Sok sikert! 🚀
