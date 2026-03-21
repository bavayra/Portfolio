export interface Project {
  id: string;
  title: string;
  description: string;
  position: {
    row: number;
    col: number;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  pageNumber?: string | number;
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
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    pageNumber: "07",
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
          "-mt-10 tablet-sm:w-52 tablet-md:w-62 phone-md:w-36 mx-auto phone-lg:w-44",
      },
      {
        thumbnail:
          "/screens/dog-shelter-screen/dog-shelter-1280-cards-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280-cards.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "translate-y-8 tablet-sm:w-52 tablet-md:w-62 phone-md:w-38 mx-auto phone-lg:w-44",
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-375.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
        className:
          "-mt-24 tablet-sm:w-52 tablet-md:w-62 phone-md:w-36 phone-lg:w-44 phone-md:-mt-36 mx-auto",
      },
    ],
  },

  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecast with OpenWeather API",
    position: { row: 1, col: 2 },
    technologies: ["CSS3", "HTML5", "Vanilla JS", "API", "Vite"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/WeatherApp.git",
    pageNumber: "05",
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
];
