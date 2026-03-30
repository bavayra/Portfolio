export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionFull?: string;
  position: {
    row: number;
    col: number;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  pageNumberMobile: string;
  pageNumberDesktop: string;
  images: {
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "dog-shelter",
    title: "Dog Shelter",
    description: "Responsive landing page for dog adoption service",
    descriptionFull:
      "Real dog shelter's landing page built with React 19, TypeScript, and Tailwind CSS. Features a custom useDogFilters hook for filtering dogs. Includes an interactive dog detail modal, photo carousel, shelter stats, and a fully validated contact form with DOMPurify sanitization and 30-second rate limiting. Mobile-first, accessible (ARIA, keyboard navigation), performance-optimized (lazy loading, AVIF/WebP images, code splitting). Clean component architecture with ESLint, Prettier, and Husky pre-commit hooks.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    pageNumberMobile: "06",
    pageNumberDesktop: "05",
    githubUrl: "https://github.com/bavayra/dog-shelter.git",
    liveUrl: "https://github.com/bavayra/dog-shelter.git",
    images: [
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1280-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "phone-md:w-38 mx-auto phone-lg:w-44 tablet-md:w-62 tablet-sm:w-52",
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1440-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1440.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "-mt-10 tablet-sm:w-52 tablet-md:w-62 desktop-md:mt-8 phone-md:w-36 desktop-sm:-mt-6 mx-auto phone-lg:w-44",
      },
      {
        thumbnail:
          "/screens/dog-shelter-screen/dog-shelter-1280-cards-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280-cards.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "translate-y-8 tablet-sm:w-52 tablet-md:w-62  desktop-md:translate-y-full phone-md:w-38 mx-auto phone-lg:w-44",
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-375.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "-mt-24 tablet-sm:w-52 tablet-md:w-62 phone-md:w-36 desktop-md:mt-8 desktop-md:mt-0 desktop-sm:-mt-24 phone-lg:w-44 phone-md:-mt-30 mx-auto",
      },
    ],
  },

  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecast with OpenWeather API",
    descriptionFull:
      "A mobile‑first weather app built with vanilla JavaScript and Vite, focused on clarity and speed for small screens. It combines real‑time OpenWeather data, hourly/daily forecasts, city search with saved favorites, and an interactive Leaflet map, plus optional geolocation and °C/°F switching. The UI is designed from a Figma mockup, optimized with lazy loading and lightweight assets, and built with accessibility in mind (semantic HTML and keyboard-friendly navigation).",
    position: { row: 1, col: 2 },
    technologies: ["CSS3", "HTML5", "Vanilla JS", "API", "Vite"],
    pageNumberMobile: "04",
    pageNumberDesktop: "04",
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/WeatherApp.git",
    images: [
      {
        thumbnail: "/screens/weather-app-screen/weather-app-main-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-main.webp",
        alt: "Weather App Main",
        width: 140,
        height: 667,
        className:
          "phone-md:w-36 mx-auto desktop-sm:mt-4 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-cities-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-cities.webp",
        alt: "Weather App Cities",
        width: 375,
        height: 667,
        className:
          "-mt-10 desktop-sm:-mt-6 mx-auto phone-md:w-36 tablet-sm:w-52 tablet-md:w-60 phone-lg:w-44 phone-lg:-mt-14",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-map-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-map.webp",
        alt: "Weather App Map",
        width: 375,
        height: 667,
        className:
          "phone-md:w-34 desktop-sm:mt-2 tablet-sm:w-52 tablet-md:w-60 phone-lg:w-44 mx-auto",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-search-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-search.webp",
        alt: "Weather App Search",
        width: 140,
        height: 667,
        className:
          "-mt-6 mx-auto desktop-sm:-mt-4 phone-lg:w-44 phone-lg:-mt-10 tablet-sm:w-52 tablet-md:w-60 phone-md:w-36",
      },
    ],
  },
  {
    id: "portfolio-project",
    title: "This Portfolio",
    description: "Responsive personal portfolio",
    descriptionFull:
      "A responsive, performance‑focused personal portfolio. Features lazy‑loaded sections via React.lazy and Suspense, fluid typography with clamp(), a custom useVh hook for mobile viewport fixes, and IntersectionObserver‑driven animations that trigger once on scroll. Includes a validated contact form with input sanitization and 30‑second rate limiting, 10 mobile‑first breakpoints, dark mode via prefers‑color‑scheme, self‑hosted WOFF2 fonts with font‑display: swap, and WebP‑optimized project screenshots with thumbnail previews and a zoom modal. Accessible throughout: ARIA labels, semantic HTML, keyboard navigation, and focus‑visible management.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    pageNumberMobile: "08",
    pageNumberDesktop: "06",
    githubUrl: "https://github.com/bavayra/portfolio.git",
    liveUrl: "https://github.com/bavayra/portfolio.git",
    images: [
      {
        thumbnail: "/screens/portfolio-screen/portfolio-390-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-390.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "tablet-sm:w-52 tablet-md:w-62 phone-md:w-36 desktop-md:mt-8 desktop-md:mt-0 phone-lg:w-44 w-34 border-2 border-grey-2",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1024-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1024.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "-mt-10 tablet-sm:w-52 tablet-md:w-62 w-34 desktop-md:mt-8 phone-md:w-36 desktop-sm:-mt-6 phone-lg:w-44 border-2 border-grey-2",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-820-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-820.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "tablet-sm:w-52 tablet-md:w-62 w-30 border-2 border-grey-2 -mt-8 desktop-md:translate-y-full phone-md:w-36 phone-lg:w-44",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1120-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1120.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "phone-md:w-38 phone-lg:w-44 tablet-md:w-62 w-30 tablet-sm:w-52 border-2 border-grey-2",
      },
    ],
  },
];
