# My Portfolio ✨

My personal portfolio site. Has an about section, my projects, skills, and a contact form. Built it with React + TypeScript, tried to keep things clean and accessible.

## Stack 🧰

- React 19 + TypeScript
- Tailwind CSS v4
- Vite
- PostCSS

## Projects featured 🗂️

- 🌤️ **Weather App** - vanilla JS app with OpenWeather API, Leaflet map, dark/light theme
- 🐾 **Dog Shelter** - React app for a real shelter, dog filters, photo galleries, contact form
- 💼 **This Portfolio** - you're looking at it

## A few things I paid attention to 🙂

- Lazy-loaded sections so the first paint is fast
- Dark mode that follows system preference
- Keyboard navigation and skip-to-content link
- Contact form with rate limiting (sessionStorage) so it doesn't get spammed
- Responsive from 360px phones to 1728px ultrawide
- Self-hosted fonts with font-display swap

## Lighthouse ✅

Performance 100 / Accessibility 96 / Best Practices 100 / SEO 92

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
