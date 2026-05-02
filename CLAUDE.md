# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page institutional website for **MHDA Advocacia** — a Brazilian law firm in Jundiaí/SP serving individuals in cível, trabalhista, and previdenciário law. All copy is in **pt-BR**.

Originated from a Claude Design prototype (React + Babel-standalone in the browser). Now a **Vite + React 18** project deployed to Vercel from GitHub `main`. No TypeScript, no UI framework, no CSS-in-JS — design tokens are CSS custom properties.

## Commands

```bash
npm install
npm run dev       # vite dev server
npm run build     # production build into dist/
npm run preview   # serve the built bundle
```

There are no tests or linters configured.

## Architecture

Three layers, each with one job:

- **`src/styles/colors_and_type.css`** — design tokens. All colors, typography, spacing, radii, shadows, and motion are CSS custom properties on `:root`. Brand palette is **navy** (`--navy-*`, primary `#103050`) and **terracotta** (`--terra-*`, accent `#B06038`) on a warm cream paper (`--paper`). Fonts: **Manrope** (display/sans) and **Source Serif 4** (serif lead text and pull quotes), loaded via Google Fonts `@import`. **Always reference variables; do not hardcode hex values or font names** in `site.css` or in component `style={{}}` props.
- **`src/styles/site.css`** — layout/component styles. Section padding scales via `--density-mult`, switched by a `data-density` attribute on `<html>` (`compact` / `default` / `airy`). The default is set in `index.html`. The runtime toggle (the prototype's "Tweaks panel") was deliberately not ported.
- **`src/App.jsx`** — every section is a small function component in this file (Header, Hero, BarBand, Areas, Pillars, Quote, Testimonials, Team, Blog, Location, Contact, Footer, WhatsAppFAB) plus a `useScrollReveal` hook. Splitting into per-component files would scatter ~10 ten-line components across folders without buying anything; keep it consolidated unless a component grows real complexity. Icons live in `src/icons.jsx`.

`src/main.jsx` is the Vite entry — imports both stylesheets and mounts `<App />` into `#root`.

## Conventions

- **Reveal animations**: add the `reveal` className to any element that should fade/slide in on scroll. Stagger siblings with inline `style={{ transitionDelay: i * 80 + "ms" }}`. The `useScrollReveal` hook in `App.jsx` adds the `.in` class via `IntersectionObserver`; CSS handles the fade/translate.
- **Anchor sections / scroll-spy**: any new top-level section that should appear in the header nav needs (a) an `id` matching one of the entries in the `ids` array inside `Header`'s scroll listener *and* (b) a matching entry in the `nav` array. Adding one without the other breaks the active-link highlight.
- **Shared contact strings**: `WHATSAPP_URL`, `PHONE_DISPLAY`, and `EMAIL` are constants at the top of `App.jsx`. Use them — do not re-type the phone number or email inline. The OAB number, address, and lawyer name are still duplicated across sections (Team, Location, Contact, Footer); when those change, grep `App.jsx`.
- **Assets**: PNG logos live in `public/assets/` and are referenced as `/assets/logo-full-azul-tight.png` (absolute paths from the site root). Do not `import` them from JS — keep them outside the bundle so Vite serves them as static files.
- **Responsive**: a single `@media (max-width: 960px)` block at the bottom of `site.css` collapses grids and hides the desktop nav. There is no mobile menu — the prototype didn't have one and it wasn't added.
- **Form submission**: the contact form's `onSubmit` only flips a "Mensagem enviada ✓" state. There is **no backend wired up**. Hooking it to an actual endpoint (Resend, Vercel serverless, Formspree, etc.) is an open task.

## Deployment

GitHub: `vitorcominato/mhda` (public). Vercel auto-deploys `main`. To preview a branch, push it and Vercel will build a preview URL.
