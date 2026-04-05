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
      "Built with React 19, TypeScript, and Tailwind CSS. Uses a custom useDogFilters hook, interactive detail modals, DOMPurify‑sanitized form inputs with 30‑second rate limiting, and AVIF/WebP image optimization. Mobile‑first and accessible (ARIA, keyboard navigation), code‑split for performance, with ESLint, Prettier, and Husky pre‑commit hooks.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
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
          "phone-md:w-38 phone-lg:-mt-5 mx-auto desktop-sm:mt-4 phone-lg:w-44 desktop-md:-mt-2 phone-md:mt-3 tablet-md:w-60 desktop-sm:w-40",
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1440-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1440.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "-mt-4 tablet-sm:w-52 tablet-md:w-60 phone-md:-mt-6 desktop-md:mt-8 phone-md:w-36 desktop-sm:-mt-6 mx-auto desktop-sm:w-40 tablet-sm:-mt-14 phone-lg:-mt-14 phone-lg:w-44",
      },
      {
        thumbnail:
          "/screens/dog-shelter-screen/dog-shelter-1280-cards-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280-cards.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "translate-y-8 tablet-sm:w-52 tablet-md:w-60  desktop-md:translate-y-full desktop-sm:w-40 phone-md:w-38 mx-auto phone-lg:w-44",
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-375.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "-mt-18 tablet-sm:w-52 tablet-sm:-mt-28 tablet-md:w-60 phone-md:w-36 desktop-md:mt-8 desktop-md:mt-0 desktop-sm:-mt-24 desktop-sm:w-40 tablet-md:-mt-32 phone-lg:w-44 phone-md:-mt-28 phone-lg:-mt-26 mx-auto",
      },
    ],
  },

  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecast with OpenWeather API",
    descriptionFull:
      "Built with vanilla JavaScript and Vite from a Figma mockup. Pulls real‑time data from the OpenWeather API, renders a Leaflet map layer, and caches responses client‑side for speed. Optimized with lazy loading and lightweight assets; accessible through semantic HTML and keyboard‑friendly navigation.",
    position: { row: 1, col: 2 },
    technologies: ["CSS3", "HTML5", "Vanilla JS", "API", "Vite"],
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
          "phone-md:w-36 mx-auto desktop-sm:mt-4 desktop-sm:w-40 phone-md:mt-2 phone-lg:w-44 phone-lg:-mt-5 tablet-sm:w-52 tablet-md:w-60",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-cities-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-cities.webp",
        alt: "Weather App Cities",
        width: 375,
        height: 667,
        className:
          "-mt-6 desktop-sm:-mt-6 mx-auto phone-md:w-36 desktop-sm:w-40 tablet-sm:w-52 tablet-md:w-60 phone-lg:w-44 phone-lg:-mt-14",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-map-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-map.webp",
        alt: "Weather App Map",
        width: 375,
        height: 667,
        className:
          "phone-md:w-34 desktop-sm:mt-2 tablet-sm:w-52 desktop-sm:w-40 tablet-sm:mt-2 tablet-md:w-60 phone-lg:w-44 mx-auto",
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-search-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-search.webp",
        alt: "Weather App Search",
        width: 140,
        height: 667,
        className:
          "mx-auto desktop-sm:-mt-4 tablet-sm:-mt-2 phone-lg:w-44 desktop-sm:w-40 phone-lg:-mt-4 phone-md:-mt-3 tablet-sm:w-52 tablet-md:w-60 phone-md:w-36",
      },
    ],
  },
  {
    id: "portfolio-project",
    title: "This Portfolio",
    description: "Responsive personal portfolio",
    descriptionFull:
      "Built with React 19, TypeScript, Tailwind CSS 4, and Vite. Sections are lazy‑loaded via React.lazy and Suspense; typography scales fluidly with clamp(). Uses a custom useVh hook for mobile viewport fixes and IntersectionObserver for one‑time scroll triggers. Form inputs are sanitized with a 30‑second rate limit; dark mode follows prefers‑color‑scheme. Self‑hosted WOFF2 fonts with font‑display: swap, WebP screenshots with thumbnail previews and a zoom modal. Accessible throughout - ARIA labels, semantic HTML, keyboard navigation, and focus‑visible management.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
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
          "tablet-md:w-60 tablet-md:-mt-5 phone-md:w-38 desktop-sm:w-40 desktop-sm:mt-4 phone-lg:w-44 w-34 tablet-sm:w-54 border-2 border-grey-2 mx-auto",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1024-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1024.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "-mt-4 tablet-md:w-60 w-34 phone-lg:-mt-12 desktop-md:-mt-4 phone-md:w-38 desktop-sm:-mt-6 desktop-sm:w-40 tablet-sm:w-54 tablet-sm:-mt-14 phone-lg:w-44 phone-md:-mt-8 border-2 border-grey-2 mx-auto ",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-820-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-820.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "tablet-md:w-60 tablet-md:-mt-22 w-30 border-2 border-grey-2 -mt-14 desktop-md:translate-y-2/3 tablet-sm:w-54 tablet-sm:-mt-13 phone-md:w-38 phone-md:-mt-11 desktop-sm:-mt-9 desktop-sm:w-40 phone-lg:w-44 mx-auto ",
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1120-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1120.webp",
        alt: "Portfolio Project",
        width: 375,
        height: 667,
        className:
          "phone-md:w-38 phone-lg:w-44 tablet-sm:w-60 tablet-sm:mt-3  desktop-md:translate-y-[120%] mx-auto tablet-md:w-60 w-30 border-2 border-grey-2 desktop-sm:w-40",
      },
    ],
  },
];
