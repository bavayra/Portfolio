import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import { SectionTitle } from "./sections/SectionTitle.tsx";
import { lazy, Suspense } from "react";
import useVh from "./hooks/useVh";

const About = lazy(() => import("./sections/About.tsx"));
const Skills = lazy(() => import("./sections/Skills.tsx"));
const Description = lazy(() => import("./sections/Description.tsx"));
const WeatherApp = lazy(() => import("./sections/WeatherApp.tsx"));
const DogShelter = lazy(() => import("./sections/DogShelter.tsx"));
const Contacts = lazy(() => import("./sections/Contacts.tsx"));
const Footer = lazy(() => import("./sections/Footer.tsx"));

function App() {
  useVh();
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <SectionTitle title="ABOUT HER" />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Skills />
          <Description />
          <SectionTitle title="HER PROJECTS" dotsCount={2} />
          <WeatherApp />
          <DogShelter />
          <SectionTitle title="HER CONTACTS" dotsCount={3} />
          <Contacts />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
