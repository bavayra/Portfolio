import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import SectionTitle from "./sections/SectionTitle.tsx";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./sections/About.tsx"));
const Projects = lazy(() => import("./sections/Projects.tsx"));
const Contacts = lazy(() => import("./sections/Contacts.tsx"));
const Footer = lazy(() => import("./sections/Footer.tsx"));

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <SectionTitle />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <SectionTitle />
          <Projects />
          <SectionTitle />
          <Contacts />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
