import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import SectionTitle from "./sections/SectionTitle.tsx";
import { lazy, Suspense } from "react";
import useVh from "./hooks/useVh";
import Contacts from "./sections/Contacts.tsx";

const About = lazy(() => import("./sections/About.tsx"));
const Skills = lazy(() => import("./sections/Skills.tsx"));
const Description = lazy(() => import("./sections/Description.tsx"));
const WeatherApp = lazy(() => import("./sections/WeatherApp.tsx"));
const DogShelter = lazy(() => import("./sections/DogShelter.tsx"));
const Portfolio = lazy(() => import("./sections/Portfolio.tsx"));

const Footer = lazy(() => import("./sections/Footer.tsx"));

function App() {
  useVh();
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bg focus:px-4 focus:py-2 focus:text-text focus:rounded focus-visible:ring-2"
      >
        Skip to main content
      </a>
      <Header />

      <main id="main-content" className="bg-bg">
        <div className="container mx-auto ">
          <Hero />
        </div>
        <section className="bg-(--color-section-title-bg)">
          <div className="container mx-auto px-4">
            <SectionTitle title="ABOUT HER" />
          </div>
        </section>
        <Suspense fallback={null}>
          <div className="container mx-auto px-4">
            <div className="flex-col desktop-sm:grid desktop-sm:grid-cols-2 gap-8">
              <About />
              <Skills />
            </div>
            <Description />
          </div>
          <section className="bg-(--color-section-title-bg)">
            <div className="container mx-auto px-4">
              <SectionTitle title="HER PROJECTS" dotsCount={2} />
            </div>
          </section>
          <div id="projects" className="container mx-auto px-4">
            <WeatherApp />
            <DogShelter />
            <Portfolio />
          </div>
          <section className="bg-(--color-section-title-bg)">
            <div className="container mx-auto px-4">
              <SectionTitle title="HER CONTACTS" dotsCount={3} />
            </div>
          </section>
          <div className="container mx-auto px-4">
            <Contacts />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
