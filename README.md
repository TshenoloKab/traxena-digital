# Traxena Digital

A polished, responsive, modern SaaS-inspired website for **Traxena Digital** (Botswana) — Website Design & Digital Solutions. Brand tagline: *Build. Innovate. Grow.* Preferred domain: *traxenadigital.com* (not yet configured).

## Tech stack
- React 19 + TypeScript + Vite
- React Router
- CSS (custom design tokens, no heavy UI framework)

## Pages
- Home, Services, Work/Portfolio, About, Contact, 404

## Design system
- Colors: soft lavender `#F6F3FF`, pale lavender `#EEE8FF`, deep indigo `#4338CA`, electric violet `#8B5CF6`, midnight navy `#111827`, charcoal `#1F2937`, slate `#64748B`, white `#FFFFFF`, borders `#E5E7EB`
- Typography: Space Grotesk (headings), Inter (body/nav/forms/buttons)

## Logo
A temporary PNG placeholder is included at `/public/traxena-logo.png`, derived from the existing `logo-traxena.jpg` asset. **No official Traxena Digital logo was found in the workspace.** Replace it with the official logo before launch and ensure it remains legible on backgrounds. The logo links to the homepage.

## Getting started (local)
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```bash
npm run build
npm run preview
```

## Deployment preparation
- **Hosting**: Any static host (e.g. Vercel, Netlify, Cloudflare Pages) works. Build outputs to `dist/`.
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Local preview**: `npm run preview` (serves `dist`, default port 4173)
- **SPA routing**: `vercel.json`, `netlify.toml`, and `public/_redirects` are included for client-side route fallbacks.
- **Environment variables**: optional `VITE_CONTACT_FORM_ENDPOINT` (HTTPS endpoint accepting JSON POST). Copy `.env.example` to `.env.local` for local testing. Never commit `.env*` (already ignored). Vite only exposes `VITE_`-prefixed variables; do not put secrets in them.
- **Domain**: `traxenadigital.com` is not assumed to be registered or configured. `og:url`/canonical tags were intentionally omitted. Re-add them only after the final domain resolves.
- **Contact form**: uses FormSubmit to deliver enquiries to `traxenadigital@gmail.com` by default. The address has been activated with FormSubmit, and live delivery was verified. The form includes a honeypot, validates client-side, and shows success/error status. Verify spam protection, test delivery, and publish confirmed contact details before launch.
- **Assets**: supply an official logo, real portfolio screenshots/demos, and confirmed contact details if you want them published.
- **Notes**: No analytics/tracking, no secrets, no backend/db/auth. Portfolio shows an honest empty state until real work exists.

## Verification
- `npm run build` passes.
- `npm run lint` passes with 0 warnings and 0 errors.
- No automated test suite is configured (`npm test` is not available).
- Headless Chrome checks covered all routes at 1440px, 768px, 390px, and 320px with no horizontal overflow or console errors.
- Contact form behaviour was verified against the real FormSubmit endpoint: validation errors, rejection while activation is pending, and no false success message.
- Contact form behaviour was also verified against a local mock endpoint: successful submission, field reset, and duplicate-submission prevention.
- Contact form behaviour was verified against the real FormSubmit endpoint: validation errors, successful live delivery, field reset, and no console errors.

## Notes on scope
- Focus: Website Design & Digital Solutions.
- No fake testimonials/clients/stats. No guaranteed rankings/growth/enterprise promises.
- Ongoing maintenance is not advertised as a standard service.
