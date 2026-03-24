# AI mit Arnie

Landing Page fuer Arnold Oberleiter — KI-Agenten, Automatisierung & Schulungen.

## Tech Stack

- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS 4
- WebGL Shader Background
- Vercel Deployment

## Entwicklung

```bash
npm install
npm run dev
```

Oeffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build

```bash
npm run build
npm start
```

## Projektstruktur

- `src/app/` — Seiten (Root, Impressum, Datenschutz)
- `src/components/` — Sektionen (Hero, Services, Community, Video, Contact, Footer, Navbar)
- `src/components/ui/` — Wiederverwendbare UI-Komponenten (Button, ShaderBackground, etc.)
- `src/lib/constants.ts` — Zentrale Links und Navigation
- `public/images/` — Bilder
- `public/video/` — Video-Assets

## Deployment

Das Projekt ist fuer Vercel konfiguriert. Push auf `master` deployed automatisch (wenn Vercel verbunden ist).
