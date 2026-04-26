export interface Project {
  id: string;
  title: string;
  descriptionShort: string;
  descriptionFull: string;
  position: {
    row: number;
    col: number;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageClasses?: Record<number, string>;
  images: {
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export const projects = [
  {
    id: "weather-app",
    title: "Weather App",
    descriptionShort:
      "A weather app with dark and light themes that shows current conditions, hourly and daily forecasts, and an interactive map. Save your favorite cities, switch between °C and °F, or let the browser detect your location - all in a fast, smooth mobile interface.",
    descriptionFull:
      "Built with vanilla JavaScript and Vite from a Figma mockup. Pulls real‑time data from the OpenWeather API, renders a Leaflet map layer, and caches responses client‑side for speed. Optimized with lazy loading and lightweight assets; accessible through semantic HTML and keyboard‑friendly navigation.",
    position: { row: 1, col: 2 },
    technologies: ["CSS3", "HTML5", "Vanilla JS", "API", "Vite"],
    liveUrl: "https://bavayra.github.io/WeatherApp/",
    githubUrl: "https://github.com/bavayra/WeatherApp.git",
    imageClasses: {
      0: "mx-auto phone-md:mt-2 phone-md:w-36 phone-lg:-mt-5 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-xl:w-52",
      1: "-mt-6 mx-auto phone-md:w-36 phone-lg:-mt-14 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60  desktop-sm:w-40 desktop-xl:w-52",
      2: "mx-auto phone-md:w-34 phone-lg:w-44 tablet-sm:mt-2 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-xl:w-52",
      3: "mx-auto phone-md:-mt-3 phone-md:w-36 phone-lg:-mt-2 phone-lg:w-44 tablet-sm:-mt-2 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-xl:w-52",
    },
    images: [
      {
        thumbnail: "/screens/weather-app-screen/weather-app-main-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-main.webp",
        alt: "Weather App Main screen view",
        width: 800,
        height: 1728,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-cities-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-cities.webp",
        alt: "Weather App saved cities screen view",
        width: 800,
        height: 1802,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-map-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-map.webp",
        alt: "Weather App map view",
        width: 800,
        height: 1591,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-search-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-search.webp",
        alt: "Weather App city search screen",
        width: 800,
        height: 1784,
      },
    ],
  },
  {
    id: "dog-shelter",
    title: "Dog Shelter",
    descriptionShort:
      "A web app for a real dog shelter - browse adoptable dogs, filter by breed, age or gender, swipe through each dog's photo gallery, check shelter statistics, and reach out through a contact form with built‑in validation.",
    descriptionFull:
      "Built with React 19, TypeScript, and Tailwind CSS. Uses a custom useDogFilters hook, interactive detail modals, DOMPurify‑sanitized form inputs with 30‑second rate limiting, and AVIF/WebP image optimization. Mobile‑first and accessible (ARIA, keyboard navigation), code‑split for performance, with ESLint, Prettier, and Husky pre‑commit hooks.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    githubUrl: "https://github.com/bavayra/dog-shelter.git",
    liveUrl: "https://dogshelter-project.netlify.app/",
    imageClasses: {
      0: "mx-auto phone-md:mt-3 phone-md:w-36 phone-lg:-mt-3 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-md:-mt-2 desktop-xl:w-52",
      1: "-mt-24 mx-auto phone-md:-mt-25 phone-md:w-36 phone-lg:-mt-36 phone-lg:w-44 tablet-sm:-mt-42 tablet-sm:w-52 tablet-md:w-60  desktop-sm:w-40 desktop-md:mt-8 desktop-xl:w-52",
      2: "mx-auto phone-md:w-38 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-md:translate-y-full desktop-xl:w-52",
      3: "-mt-17 mx-auto phone-md:-mt-22 phone-md:w-36 phone-lg:-mt-24 phone-lg:w-44 tablet-sm:-mt-30 tablet-sm:w-48 tablet-md:-mt-32 tablet-md:w-60 desktop-sm:-mt-18 desktop-sm:w-40 desktop-xl:w-52",
    },
    images: [
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1280-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280.webp",
        alt: "Dog Shelter desktop view 1280px",
        width: 800,
        height: 2116,
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1440-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1440.webp",
        alt: "Dog Shelter desktop view 1440px",
        width: 800,
        height: 1783,
      },
      {
        thumbnail:
          "/screens/dog-shelter-screen/dog-shelter-1280-cards-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280-cards.webp",
        alt: "Dog Shelter desktop view 1280px with cards expanded",
        width: 800,
        height: 488,
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-375.webp",
        alt: "Dog Shelter mobile view 375px",
        width: 800,
        height: 1565,
      },
    ],
  },
  {
    id: "portfolio-project",
    title: "This Portfolio",
    descriptionShort:
      "My personal portfolio — a single‑page showcase of projects, skills with animated progress badges, and a contact form. Sections reveal on scroll, the design adapts from 320 px phones to ultrawide displays, and everything switches seamlessly to dark mode.",
    descriptionFull:
      "Built with React 19, TypeScript, Tailwind CSS 4, and Vite. Sections are lazy‑loaded via React.lazy and Suspense; typography scales fluidly with clamp(). Uses dvh units for mobile viewport fixes and IntersectionObserver for one‑time scroll triggers. Form inputs are sanitized with a 30‑second rate limit; dark mode follows prefers‑color‑scheme. Self‑hosted WOFF2 fonts with font‑display: swap, WebP screenshots with thumbnail previews and a zoom modal. Accessible throughout - ARIA labels, semantic HTML, keyboard navigation, and focus‑visible management.",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    githubUrl: "https://github.com/bavayra/portfolio.git",
    liveUrl: "https://alix-bell-portfolio.netlify.app",
    imageClasses: {
      0: "mx-auto -mt-13 w-34 phone-md:w-36 phone-md:-mt-10 phone-lg:w-44 phone-lg:-mt-22 tablet-sm:w-52 tablet-md:-mt-34 tablet-md:w-60 border-2 border-grey-2  desktop-sm:w-44 desktop-xl:w-52",
      1: "-mt-4 mx-auto w-34 phone-md:-mt-3 phone-md:w-36 phone-lg:-mt-12 phone-lg:w-44 tablet-sm:-mt-14 tablet-sm:w-50 tablet-md:w-60 border-2 border-grey-2  desktop-sm:w-44 desktop-lg:-mt-9 desktop-md:-mt-4 desktop-xl:w-52",
      2: "-mt-12 mx-auto w-30 phone-md:-mt-13 phone-md:w-36 phone-lg:w-44 phone-lg:-mt-16 tablet-sm:-mt-15 tablet-sm:w-50 tablet-md:-mt-26 tablet-md:w-60 border-2 border-grey-2 desktop-sm:-mt-13 desktop-sm:w-44 desktop-md:translate-y-2/3 desktop-xl:w-52",
      3: "mx-auto w-30 phone-md:w-36 phone-lg:w-44 tablet-sm:mt-3 tablet-sm:w-54 tablet-md:w-60 border-2 border-grey-2 desktop-sm:w-44 desktop-md:translate-y-[120%] desktop-xl:w-52",
    },
    images: [
      {
        thumbnail: "/screens/portfolio-screen/portfolio-390-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-390.webp",
        alt: "Portfolio mobile view 390px",
        width: 200,
        height: 412,
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1024-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1024.webp",
        alt: "Portfolio desktop view 1024px",
        width: 1024,
        height: 2686,
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-820-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-820.webp",
        alt: "Portfolio tablet view 820px",
        width: 412,
        height: 471,
      },
      {
        thumbnail: "/screens/portfolio-screen/portfolio-1120-thumb.webp",
        full: "/screens/portfolio-screen/portfolio-1120.webp",
        alt: "Portfolio desktop view 1120px",
        width: 600,
        height: 342,
      },
    ],
  },
] satisfies Project[];

export type ProjectId = (typeof projects)[number]["id"];
