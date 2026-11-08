# Traxena Digital

A polished, responsive, modern SaaS-inspired website for Traxena Digital - Website Design & Digital Solutions. Brand tagline: Build. Innovate. Grow. Preferred domain: traxenadigital.com

**Build. Innovate. Grow.**

## Live website

- **Production:** https://traxena-digital.vercel.app
- **Custom domain:** https://traxenadigital.com

## Technology stack

- React 19
- TypeScript
- Vite
- React Router
- Custom CSS (design tokens, no heavy UI framework)

## Pages

- Home
- Services
- Work / Portfolio
- About
- Contact
- 404

## Design and user experience

- Responsive layouts across desktop, tablet and mobile
- Lavender / violet / navy colour palette
- Space Grotesk (headings) and Inter (body text) typography
- Light and dark theme support
- Interactive and accessible elements throughout

## Portfolio

The six projects below are **demonstration projects created for portfolio purposes** — they are not commissioned client projects.

- Author's Studio — Author Branding
- Cleaning Pro — Cleaning Services
- Elan Beauty Studio — Beauty & Wellness
- Ngwao Couture — Fashion & Retail
- Setho Kitchen — Food & Catering
- Trixtin AI — AI Solutions

## Contact form

Enquiries are delivered via **FormSubmit** to **traxenadigital@gmail.com**. The form includes client-side validation, a honeypot field and other spam-prevention measures, and clearly reports success or failure. Live delivery depends on FormSubmit’s activation for the deployed domain.

## Getting started

```bash
git clone https://github.com/TshenoloKab/traxena-digital.git
cd traxena-digital
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build   # builds to dist/
npm run preview # serves the production build locally (default port 4173)
```

## Deployment

- **Hosting:** Vercel
- **Repository:** https://github.com/TshenoloKab/traxena-digital
- **Branch:** `main` (production)
- **Automatic deployments:** pushes to `main` trigger production deployments
- **Output directory:** `dist`
- **Build command:** `npm run build`

## Environment variables

`VITE_CONTACT_FORM_ENDPOINT` — optional override for the contact form’s JSON POST endpoint. When left unset, the form uses the default FormSubmit endpoint for `traxenadigital@gmail.com`.

See `.env.example` for details. Do not commit `.env*` files (already ignored); never put secrets in `VITE_`-prefixed variables.

## Project scope

This is a static frontend application. There is currently **no custom backend, database or authentication system**. The contact form is handled by FormSubmit; there is no server-side storage or user management.
