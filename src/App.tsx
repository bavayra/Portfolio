import Header from "./sections/Header";
import Hero from "./sections/Hero";
import SectionTitle from "./sections/SectionTitle";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Description from "./sections/Description";
import { lazy, Suspense } from "react";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const ProjectSection = lazy(() => import("./sections/ProjectSection"));
const Contacts = lazy(() => import("./sections/Contacts"));

function ErrorFallback() {
  return (
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
}

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-bg focus:px-4 focus:py-2 focus:text-text focus:rounded focus-visible:ring-2"
      >
        Skip to main content
      </a>
      <Header />

      <main id="main-content" tabIndex={-1} className="bg-bg outline-none">
        <div className="w-full mx-auto ">
          <Hero />
        </div>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense
            fallback={
              <div
                className="min-h-screen bg-bg"
                aria-busy="true"
                aria-label="Loading page content"
              />
            }
          >
            <section id="about-section" aria-labelledby="about-title">
              <div className="bg-(--color-section-title-bg)">
                <div className="w-full mx-auto px-4">
                  <SectionTitle title="ABOUT ME" headingId="about-title" />
                </div>
              </div>

              <div className="bg-bg">
                <div className="w-full mx-auto px-4">
                  <div className="flex-col desktop-sm:grid desktop-sm:grid-cols-2 gap-x-8 desktop-sm:gap-x-0">
                    <About />
                    <Skills />
                  </div>
                  <Description />
                </div>
              </div>
            </section>

            <div
              id="projects-section"
              className="bg-(--color-section-title-bg)"
            >
              <div className="w-full mx-auto px-4">
                <SectionTitle
                  title="PROJECTS"
                  dotsCount={2}
                  headingId="projects-title"
                />
              </div>
            </div>
            <div id="projects" className="w-full mx-auto">
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
                sectionClassName="desktop-sm:pb-0 desktop-md:pb-10 p-8"
                screenContainerClassName="desktop-md:-mt-2"
                projectDescClassName="desktop-sm:-translate-y-[18%] desktop-md:max-w-[45rem] desktop-md:-translate-x-1/4 desktop-md:mt-6 desktop-xl:mt-12 ml-4"
              />
              <ProjectSection
                projectId="portfolio-project"
                sectionNumber="06"
                sectionClassName="desktop-md:pt-0 p-8 pb-16"
                projectDescClassName="desktop-md:max-w-[45rem] desktop-md:mt-4 desktop-md:-translate-x-1/4 desktop-lg:mt-3 desktop-xl:text-lg desktop-sm:mt-0 ml-4"
              />
            </div>
            <div
              id="contacts-section"
              className="bg-(--color-section-title-bg)"
            >
              <div className="w-full mx-auto px-4">
                <SectionTitle
                  title="CONTACTS"
                  dotsCount={3}
                  headingId="contacts-title"
                />
              </div>
            </div>
            <div className="w-full mx-auto px-4">
              <Contacts />
            </div>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
