# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  # Frontend Developer Portfolio

  A fast, typography-forward portfolio built with React and TypeScript. The page is composed of clean, focused sections (About, Skills, Projects, Contacts) and optimized for smooth navigation and quick initial paint.

  ## Highlights

  - Single-page layout with clear section structure and smooth flow.
  - Projects showcase: Weather App, Dog Shelter, plus a general portfolio block.
  - Lazy-loaded sections to keep the first render light.

  ## Tech Stack

  - React 19, TypeScript
  ## Frontend Developer Portfolio

  A warm, modern single-page portfolio built with React + TypeScript. The layout highlights projects, skills, and contact info with clean sections, smooth reading flow, and fast first paint. ✨

  ## At a Glance

  - Single-page structure with clear section rhythm.
  - Projects spotlight: Weather App, Dog Shelter, plus a general portfolio block.
  - Lazy-loaded sections to keep the initial render snappy.
  - Polished visuals: icons, typography, and spacing tuned for readability.

  ## Sections

  - Hero: quick intro and positioning.
  - About: a concise personal snapshot.
  - Skills: key technologies and strengths.
  - Description: deeper context and focus areas.
  - Projects: featured work with visuals and links.
  - Contacts: simple, direct ways to reach out.

  ## Tech Stack

  - React 19, TypeScript
  - Vite
  - Tailwind CSS + PostCSS
  - SVGR for SVG icons

  ## Scripts

  ```bash
  npm run dev       # local development
  npm run build     # production build
  npm run preview   # preview the build
  npm run lint      # lint
  ```

  ## Project Structure

  ```text
  src/
    components/     # shared UI components
    sections/       # page sections
    hooks/          # custom hooks
    data/           # content and data
    utils/          # utilities
  ```

  ## Quick Start

  ```bash
  npm install
  npm run dev
  ```

  ## Configuration Notes

  - Meta description and icons are configured in [index.html](index.html).
  - Section content lives in [src/sections](src/sections).
  - Global styles are in [src/index.css](src/index.css) and [src/App.css](src/App.css).

  ## Why It Works

  - Minimal layout noise: the viewer sees what matters first.
  - Clear hierarchy: titles, dividers, and spacing guide the eye.
  - Performance-friendly: lazy loading keeps the first paint light.

  If you want, I can add badges, a live demo link, or screenshots. 😊
````
