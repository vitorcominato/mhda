# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page institutional website for **MHDA Advocacia** — a Brazilian law firm based in Jundiaí/SP serving individuals nationally (presencial em Jundiaí, videochamada em todo o Brasil) in direito civil, trabalhista, and previdenciário. All copy is in **pt-BR**. Note: the spelling is **civil** (not "cível") — the user explicitly chose the standard Portuguese form across the site.

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
- **`src/App.jsx`** — every section is a small function component in this file (Header, Hero, BarBand, Areas, Pillars, Quote, Testimonials, Blog, Location, Contact, Footer, WhatsAppFAB) plus a `useScrollReveal` hook. There is no Team section — the user removed it; do not re-add an "advogada responsável" block without explicit instruction. Splitting into per-component files would scatter small components across folders without buying anything; keep it consolidated unless a component grows real complexity. Icons live in `src/icons.jsx`.

`src/main.jsx` is the Vite entry — imports both stylesheets and mounts `<App />` into `#root`.

## Conventions

- **Reveal animations**: add the `reveal` className to any element that should fade/slide in on scroll. Stagger siblings with inline `style={{ transitionDelay: i * 80 + "ms" }}`. The `useScrollReveal` hook in `App.jsx` adds the `.in` class via `IntersectionObserver`; CSS handles the fade/translate.
- **Anchor sections / scroll-spy**: any new top-level section that should appear in the header nav needs (a) an `id` matching one of the entries in the `ids` array inside `Header`'s scroll listener *and* (b) a matching entry in the `nav` array. Adding one without the other breaks the active-link highlight.
- **Shared contact strings**: `WHATSAPP_URL` (with pre-filled message), `WHATSAPP_HREF` (bare wa.me link for tel-style), `PHONE_DISPLAY`, and `EMAIL` are constants at the top of `App.jsx`. Use them — do not re-type the phone number or email inline. The phone is **(11) 96707-5293** (WhatsApp de atendimento). OAB and address are still duplicated across Location, Contact, and Footer; when those change, grep `App.jsx`.
- **Assets**: PNG logos live in `public/assets/` and are referenced as `/assets/logo-full-azul-tight.png` (absolute paths from the site root). Do not `import` them from JS — keep them outside the bundle so Vite serves them as static files.
- **Responsive**: three breakpoints at the bottom of `site.css` — `960px` collapses grids and hides the desktop nav, `600px` is the phone breakpoint (Android/iOS portrait) that retypes hero/section spacing and stacks the bar-band, and `380px` strips long labels from the header CTA and the FAB. There is no mobile menu — the desktop nav is hidden below 960px and the WhatsApp CTA + floating FAB are the primary actions.
- **WhatsApp emphasis**: the site is heavily WhatsApp-first by design. The header CTA, hero CTA (`btn-whatsapp`), an extra big CTA in the contact section (`btn-whatsapp-big`, with a glow animation), and the floating FAB all point to the same `WHATSAPP_URL`. The FAB has a periodic shake (`wa-shake`) and pulsing glow (`wa-glow`) — both pause on `prefers-reduced-motion`. Do not tone these animations down without an explicit ask; the user specifically requested attention-grabbing effects.
- **Response-time messaging**: "Resposta em até 24 horas" appears in the hero (under the actions, with a pulsing green dot), the contact section h2, the FAB sub-label, and one of the pillars. If you change the SLA, grep for `24 horas` and update all four.
- **Form submission**: the contact form's `onSubmit` only flips a "Mensagem enviada ✓" state. There is **no backend wired up**. Hooking it to an actual endpoint (Resend, Vercel serverless, Formspree, etc.) is an open task.

## Deployment

- **Production URL**: https://mhda.adv.br (custom domain configured in Vercel)
- **GitHub repo**: [`vitorcominato/mhda`](https://github.com/vitorcominato/mhda) (public)
- **Vercel project**: `mhda` under team `vitorcominatos-projects`
- **Branch alias**: `mhda-git-main-vitorcominatos-projects.vercel.app`

Vercel auto-deploys on every push to `main`. Pushing any other branch produces a preview deployment with its own URL.
