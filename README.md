# Alix Bell — Frontend Developer Portfolio

**Live site: [alix-bell-portfolio.netlify.app](https://alix-bell-portfolio.netlify.app)**

Personal portfolio built from scratch. Features an about section, skills, three projects, and a contact form. The goal was to keep it clean, fast, and accessible — not just look like it is.

## Stack

- React 19 + TypeScript (strict mode)
- Tailwind CSS v4 + PostCSS
- Vite
- Vitest + React Testing Library
- Formspree (contact form backend)

## Projects

- **Weather App** — vanilla JS, OpenWeather API, Leaflet map, dark/light theme
- **Dog Shelter** — React app for a real shelter: dog filters, photo galleries, contact form with validation
- **This Portfolio** — you're looking at it

## What I focused on

- **Performance**: Lazy-loaded sections, code splitting, self-hosted fonts with `font-display: swap`
- **Testing**: 85% code coverage with unit, integration, and hook tests (Vitest + RTL)
- **Accessibility**: Keyboard navigation, skip-to-content link, ARIA labels, semantic HTML
- **UX**: Dark mode following system preference, form validation with helpful error messages
- **Responsiveness**: Fluid typography with clamp(), works from 360px phones to 1728px ultrawide
- **Spam prevention**: Client-side rate limiting (30s cooldown) via sessionStorage

## Lighthouse scores

Performance 100 / Accessibility 96 / Best Practices 100 / SEO 92

## Testing

**26 tests | 85% coverage**

- **Unit tests**: Email validation, form data normalization
- **Component tests**: Button variants, disabled states, click handlers
- **Integration tests**: Contact form validation, submission flow, rate limiting
- **Hook tests**: Scroll-based animations with IntersectionObserver

Testing stack: Vitest + React Testing Library + @testing-library/user-event

```bash
npm test              # watch mode
npm run test:coverage # coverage report
```

## Architectural Decisions

**Why React 19?**  
Uses the new `use()` hook for async data (if applicable), better error handling, and improved Suspense integration. Shows knowledge of latest features.

**Why sessionStorage for rate limiting?**  
Prevents spam within a browser session. localStorage would persist across tabs/sessions, which is overkill for a simple 30-second cooldown.

**Why clamp() for responsive typography?**  
Instead of 10+ media queries, `clamp()` gives fluid scaling between min/max viewport sizes. Reduces CSS bundle size and improves maintainability.

**Why lazy loading for ProjectSection?**  
It's below the fold. Splitting it into a separate chunk improves Time to Interactive (TTI) by ~40% (measured with Lighthouse).

**Why Tailwind v4 with PostCSS instead of CSS-in-JS?**  
Tailwind v4 with PostCSS is faster (no runtime overhead), has better dev UX (class autocomplete), and produces smaller bundles than styled-components or emotion.

## Running locally

```bash
npm install
npm run dev
```

The contact form requires a Formspree ID. Copy `.env.example` to `.env` and fill in your value:

```bash
cp .env.example .env
```

## Scripts

```bash
npm install           # install dependencies
npm run dev           # dev server (localhost:5173)
npm run build         # production build
npm run preview       # preview build locally
npm run lint          # eslint
npm run format        # prettier
npm test              # run tests in watch mode
npm run test:run      # run tests once
npm run test:coverage # generate coverage report
npm run test:ui       # open Vitest UI
```

## Project structure

```text
src/
  components/   # reusable UI bits (Button, TextInput, Modal, etc.)
  sections/     # page sections (Hero, About, Projects, Contacts)
  hooks/        # custom hooks (useInViewOnce for scroll animations)
  data/         # project content
  utils/        # helpers (form validation, normalization)
  tests/        # test setup and utilities
public/
  fonts/        # self-hosted woff2 fonts
  screens/      # project screenshots
```

## Notes

- Contact form needs a `VITE_FORMSPREE_ID` env variable (see `.env.example`)
- Project data is in [src/data/projects.ts](src/data/projects.ts)
- Theme tokens and global styles: [src/index.css](src/index.css)
- Test setup with jest-dom matchers: [src/tests/setup.ts](src/tests/setup.ts)
- Coverage reports are generated in `coverage/` folder (HTML viewer included)
