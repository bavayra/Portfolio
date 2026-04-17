const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-8 ml-3 tablet-sm:ml-12 tablet-md:pb-0 desktop-lg:ml-10 desktop-xl:pb-12"
    >
      <p
        className="text-text text-[length:var(--font-page-number)]"
        aria-hidden="true"
      >
        01
      </p>
      <h3
        className="text-[length:var(--font-section-label)] text-grey-2 font-medium tablet-md:my-2 desktop-sm:text-4xl desktop-xl:text-5xl"
        id="about-heading"
      >
        WHO AM I
      </h3>

      <p className="mt-2 text-[length:var(--font-body-sm)] text-text leading-loose tracking-wide ml-3 w-full break-words whitespace-normal phone-lg:pl-2 [max-width:var(--max-w-text-sm)] desktop-sm:[max-width:var(--max-w-text-lg)] desktop-xl:text-2xl border-l-2 border-grey-2">
        I’m a junior front‑end developer focused on building polished,
        accessible interfaces with React and TypeScript. I care about
        performance and maintainability—using Vite and Tailwind to deliver fast,
        responsive experiences—and enjoy turning designs into clean, readable
        code. I’m eager to learn new technologies and contribute to real
        projects.
      </p>

      <a
        href="/Alix_Bell_Frontend_Dev.pdf"
        download
        className="mt-2 inline-block mr-4 ml-auto phone-sm:mt-4 phone-sm:mr-8 tablet-sm:mr-16 tablet-sm:mt-0 rounded-sm bg-accent-red text-white px-3 py-2 text-sm tablet-md:mr-[7.5rem] desktop-sm:ml-6 desktop-sm:mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:rounded-sm"
      >
        Download CV
      </a>
    </section>
  );
};

export default About;
