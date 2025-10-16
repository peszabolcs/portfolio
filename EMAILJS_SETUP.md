# EmailJS Setup Guide

Az email küldés működéséhez be kell állítanod az EmailJS szolgáltatást. Kövesd az alábbi lépéseket:

## 1. EmailJS Account létrehozása

1. Menj a [https://www.emailjs.com/](https://www.emailjs.com/) oldalra
2. Regisztrálj egy ingyenes fiókot
3. Jelentkezz be

## 2. Email Service hozzáadása

1. A Dashboard-on kattints az **"Email Services"** menüpontra
2. Kattints az **"Add New Service"** gombra
3. Válaszd ki a Gmail-t (vagy bármilyen más email szolgáltatót)
4. Kövesd az utasításokat a Gmail account csatlakoztatásához
5. **Másold ki a Service ID-t** (például: `service_abc1234`)

## 3. Email Template létrehozása

1. Menj az **"Email Templates"** menüpontra
2. Kattints a **"Create New Template"** gombra
3. Állítsd be az email template-et:

### Template példa:

**Subject:** Új üzenet a portfólióról - {{from_name}}

**Content:**

```
Új üzenet érkezett a portfólió weboldal contact formjából.

Feladó neve: {{from_name}}
Email címe: {{from_email}}

Üzenet:
{{message}}

---
Ez az email automatikusan lett generálva a portfólió weboldalról.
```

4. **To email:** Add meg a saját email címed: `perjesidev@gmail.com`
5. **Másold ki a Template ID-t** (például: `template_xyz9876`)

## 4. Public Key megszerzése

1. Menj az **"Account"** -> **"General"** menüpontra
2. Másold ki a **Public Key**-t (például: `AbCdEfGh12345678`)

## 5. Environment változók beállítása

1. Hozz létre egy `.env` fájlt a projekt gyökérkönyvtárában
2. Másold be az alábbi sorokat a saját adataiddal:

```env
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz9876
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGh12345678
```

3. Mentsd el a fájlt

## 6. Gitignore

Győződj meg róla, hogy a `.env` fájl nincs commitolva a git repository-ba!

A `.gitignore` fájlban legyen benne:

```
.env
.env.local
```

## 7. Teszt

1. Indítsd újra a dev szervert: `npm run dev`
2. Menj a Contact szekcióhoz
3. Töltsd ki az űrlapot és küldj egy teszt üzenetet
4. Ellenőrizd a `perjesidev@gmail.com` inbox-ot

## Hibaelhárítás

Ha nem működik:

- Ellenőrizd, hogy a `.env` fájlban nincs szóköz a `=` jel körül
- Győződj meg róla, hogy a Service, Template és Public Key helyesen van bemásolva
- Nézd meg a böngésző konzolját (F12) hibaüzenetekért
- Ellenőrizd az EmailJS dashboard-on, hogy a service aktív-e

## Ingyenes limit

Az EmailJS ingyenes tier:

- 200 email / hónap
- Ez bőven elég egy portfólió oldalhoz

---

Ha minden be van állítva, a contact form tökéletesen fog működni! 🚀
