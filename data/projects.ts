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
  images: {
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export const projects: Project[] = [
  {
    id: "dog-shelter",
    title: "Dog Shelter",
    description: "Responsive landing page for dog adoption service",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/dog-shelter.git",
    images: [
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-375.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1440-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1440.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
      },
      {
        thumbnail: "/screens/dog-shelter-screen/dog-shelter-1280-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
      },
      {
        thumbnail:
          "/screens/dog-shelter-screen/dog-shelter-1280-cards-thumb.webp",
        full: "/screens/dog-shelter-screen/dog-shelter-1280-cards.webp",
        alt: "Dog Shelter",
        width: 375,
        height: 667,
      },
    ],
  },

  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecast with OpenWeather API",
    position: { row: 1, col: 2 },
    technologies: ["React", "TypeScript", "API"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/WeatherApp.git",
    images: [
      {
        thumbnail: "/screens/weather-app-screen/weather-app-main-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-main.webp",
        alt: "Weather App",
        width: 375,
        height: 667,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-cities-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-cities.webp",
        alt: "Weather App",
        width: 375,
        height: 667,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-map-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-map.webp",
        alt: "Weather App",
        width: 375,
        height: 667,
      },
      {
        thumbnail: "/screens/weather-app-screen/weather-app-search-thumb.webp",
        full: "/screens/weather-app-screen/weather-app-search.webp",
        alt: "Weather App",
        width: 375,
        height: 667,
      },
    ],
  },
];
