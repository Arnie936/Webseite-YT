# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server (Turbopack, http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve production build

No linter or test runner is configured.

## Tech Stack

- Next.js 16 (App Router) / React 19 / TypeScript 5
- Tailwind CSS 4 — configured via `@theme inline` in `src/app/globals.css` (no `tailwind.config.ts`)
- Deployed to Vercel

## Architecture

Single-page landing site for "AI mit Arnie" (German language, `lang="de"`). All content lives on the root route (`/`).

**Rendering model:** Only `Navbar` and `VideoSection` are Client Components (`"use client"`). Everything else is a Server Component. `ShaderBackground` is also a Client Component (WebGL canvas).

**Background system:** A full-screen fixed WebGL shader canvas (`ShaderBackground`) renders behind all content at `z-index: -10`. The `body` has `background: transparent` so the shader shows through. Sections that need readability use `bg-surface/80 backdrop-blur-sm` or similar semi-transparent backgrounds.

**Design tokens:** All custom colors (neon-cyan, neon-violet, neon-blue, surface, background), shadows (glow-*), and animations are defined in `globals.css` under `@theme inline`. Use these token names in Tailwind classes (e.g., `text-neon-cyan`, `bg-surface`, `shadow-glow-violet`).

**Navigation:** Smooth-scroll to section IDs (`#leistungen`, `#community`, `#kontakt`). `scroll-padding-top: 80px` accounts for the fixed navbar.

**External links and constants:** All URLs (Skool, YouTube, email) are centralized in `src/lib/constants.ts`.

## Key Conventions

- Reusable UI primitives live in `src/components/ui/` (Button, SectionHeading, NeonLine, ShaderBackground)
- Section components are in `src/components/` (Navbar, HeroSection, ServicesSection, etc.)
- When adding new sections: add to `src/app/page.tsx` in render order, use semi-transparent backgrounds to preserve shader visibility
- Custom CSS utilities (`.gradient-text`, `.glow-text-cyan`, `.neon-streak`) are in `globals.css`
