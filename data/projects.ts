export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  position: {
    row: number;
    col: number;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "dog-shelter",
    title: "Dog Shelter",
    description: "Responsive landing page for dog adoption service",
    thumbnail: "/screens/dog-shelter-screen/dog-shelter-390-thumb.webp",
    fullImage: "/screens/dog-shelter-screen/dog-shelter-375.webp",
    position: { row: 1, col: 1 },
    technologies: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/dog-shelter.git",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description: "Real-time weather forecast with OpenWeather API",
    thumbnail: "/screens/weather-app-screen/weather-app-main-thumb.webp",
    fullImage: "/screens/weather-app-screen/weather-app-main.webp",
    position: { row: 1, col: 2 },
    technologies: ["React", "TypeScript", "API"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/bavayra/WeatherApp.git",
  },
];
