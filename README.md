# Alix Bell — Frontend Developer Portfolio

**Live site: [alix-bell-portfolio.netlify.app](https://alix-bell-portfolio.netlify.app)**

Personal portfolio built from scratch. Features an about section, skills, three projects, and a contact form. The goal was to keep it clean, fast, and accessible — not just look like it is.

## Stack

- React 19 + TypeScript
- Tailwind CSS v4
- Vite
- PostCSS

## Projects

- **Weather App** — vanilla JS, OpenWeather API, Leaflet map, dark/light theme
- **Dog Shelter** — React app for a real shelter: dog filters, photo galleries, contact form with validation
- **This Portfolio** — you're looking at it

## What I focused on

- Lazy-loaded sections for a fast first paint
- Dark mode that follows system preference
- Keyboard navigation and a skip-to-content link
- Contact form with client-side rate limiting via sessionStorage
- Responsive from 360px phones to 1728px ultrawide monitors
- Self-hosted fonts with `font-display: swap`

## Lighthouse scores

Performance 100 / Accessibility 96 / Best Practices 100 / SEO 92

## Running locally

```bash
npm install
npm run dev
```

The contact form requires a Formspree ID. Copy `.env.example` to `.env` and fill in your value:

```bash
cp .env.example .env
```

## Scripts 🛠️

```bash
npm install
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview build locally
npm run lint      # eslint
npm run format    # prettier
```

## Project structure 🧱

```text
src/
  components/   # reusable UI bits
  sections/     # page sections
  data/         # project content
  utils/        # form helpers
public/
  fonts/        # woff2 fonts
  screens/      # project screenshots
```

## Notes 📝

- Contact form needs a `VITE_FORMSPREE_ID` env variable
- Project data is all in [src/data/projects.ts](src/data/projects.ts)
- Theme tokens and global styles live in [src/index.css](src/index.css)
