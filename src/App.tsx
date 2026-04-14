import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import SectionTitle from "./sections/SectionTitle.tsx";
import { lazy, Suspense } from "react";
import useVh from "./hooks/useVh";
import Contacts from "./sections/Contacts.tsx";

const About = lazy(() => import("./sections/About.tsx"));
const Skills = lazy(() => import("./sections/Skills.tsx"));
const Description = lazy(() => import("./sections/Description.tsx"));
const ProjectSection = lazy(() => import("./sections/ProjectSection.tsx"));
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
            <ProjectSection
              projectId="weather-app"
              sectionNumber="04"
              sectionClassName="p-8 desktop-lg:mt-10"
              screenContainerClassName="desktop-md:mt-10 desktop-lg:mt-4"
              projectDescClassName="desktop-sm:-translate-y-[30%] desktop-md:max-w-[45rem] desktop-md:mt-14 desktop-md:-translate-x-1/4"
            />
            <ProjectSection
              projectId="dog-shelter"
              sectionNumber="05"
              sectionClassName="pt-8 pb-8 desktop-sm:pb-0 desktop-md:pb-10"
              screenContainerClassName="desktop-md:-mt-2"
              projectDescClassName="desktop-sm:-translate-y-[18%] desktop-md:max-w-[45rem] desktop-md:-translate-x-1/4 desktop-md:mt-6 desktop-xl:mt-12"
            />
            <ProjectSection
              projectId="portfolio-project"
              sectionNumber="06"
              sectionClassName="pt-8 pb-20 desktop-md:pt-0"
              screenContainerClassName="rounded-xl"
              projectDescClassName="desktop-md:max-w-[45rem] desktop-md:mt-4 desktop-md:-translate-x-1/4 desktop-lg:mt-3 desktop-xl:text-lg desktop-sm:mt-0"
              projectScreenClassName="phone-md:gap-x-2 phone-lg:gap-x-0"
            />
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
