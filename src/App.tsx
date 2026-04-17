import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import SectionTitle from "./sections/SectionTitle.tsx";
import About from "./sections/About.tsx";
import Skills from "./sections/Skills.tsx";
import Description from "./sections/Description.tsx";
import { lazy, Suspense } from "react";
import Footer from "./sections/Footer.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const ProjectSection = lazy(() => import("./sections/ProjectSection.tsx"));
const Contacts = lazy(() => import("./sections/Contacts.tsx"));

const errorFallback = (
  <div className="flex flex-col items-center justify-center py-20 text-center px-4">
    <p className="text-text text-lg mb-4">
      Something went wrong while loading the page.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="text-accent-red underline text-sm"
    >
      Try reloading
    </button>
  </div>
);

function App() {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-bg focus:px-4 focus:py-2 focus:text-text focus:rounded focus-visible:ring-2"
      >
        Skip to main content
      </a>
      <Header />

      <main id="main-content" tabIndex={-1} className="bg-bg outline-none">
        <div className="container mx-auto ">
          <Hero />
        </div>
        <ErrorBoundary fallback={errorFallback}>
          <Suspense
            fallback={
              <div
                className="min-h-screen bg-bg"
                aria-busy="true"
                aria-label="Loading page content"
              />
            }
          >
            <section
              id="about-section"
              className="bg-(--color-section-title-bg)"
            >
              <div className="container mx-auto px-4">
                <SectionTitle title="ABOUT ME" />
              </div>

              <div className="container mx-auto px-4">
                <div className="flex-col desktop-sm:grid desktop-sm:grid-cols-2 gap-8">
                  <About />
                  <Skills />
                </div>
                <Description />
              </div>
            </section>
            <section className="bg-(--color-section-title-bg)">
              <div className="container mx-auto px-4">
                <SectionTitle title="PROJECTS" dotsCount={2} />
              </div>
            </section>
            <section id="projects" className="container mx-auto px-4">
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
            </section>
            <section className="bg-(--color-section-title-bg)">
              <div className="container mx-auto px-4">
                <SectionTitle title="CONTACTS" dotsCount={3} />
              </div>
            </section>
            <div className="container mx-auto px-4">
              <Contacts />
            </div>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default App;
