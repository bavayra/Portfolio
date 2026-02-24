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
const Portfolio = lazy(() => import("./sections/Portfolio.tsx"));
const Contacts = lazy(() => import("./sections/Contacts.tsx"));
const Footer = lazy(() => import("./sections/Footer.tsx"));

function App() {
  useVh();
  return (
    <div>
      <Header />
      <main className="bg-bg">
        <div className="container mx-auto px-4">
          <Hero />
        </div>
        <section className="bg-(--color-section-title-bg)">
          <div className="container mx-auto px-4">
            <SectionTitle title="ABOUT HER" />
          </div>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="container mx-auto px-4">
            <About />
            <Skills />
            <Description />
          </div>
          <section className="bg-(--color-section-title-bg)">
            <div className="container mx-auto px-4">
              <SectionTitle title="HER PROJECTS" dotsCount={2} />
            </div>
          </section>
          <div className="container mx-auto px-4">
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
