const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-8 mb-4 ml-3 tablet-sm:ml-9 tablet-md:mb-6 desktop-lg:ml-10 desktop-lg:mb-20 desktop-xl:pb-12"
    >
      <div className="leading-6.5 phone-lg:leading-7.5 tablet-sm:leading-8.5 desktop-2xl:leading-10">
        <p
          className="text-text text-(length:--font-page-number) desktop-md:text-[1.75rem] desktop-2xl:text-[2.5rem]"
          aria-hidden="true"
        >
          01
        </p>
        <h3
          className="text-[2.75rem] text-grey-2 font-medium desktop-sm:text-5xl desktop-2xl:text-7xl"
          id="about-heading"
        >
          WHO AM I
        </h3>
      </div>

      <p
        className="mt-2 text-(length:--font-body-sm) phone-lg:mt-4 text-text leading-loose tracking-wide w-full wrap-break-word whitespace-normal pl-2 max-w-(--max-w-text-sm) desktop-sm:max-w-(--max-w-text-lg) desktop-xl:text-lg border-l-2 [@media(min-width:1920px)_and_(min-height:1440px)]:text-xl border-grey-2"
        style={{ borderLeftWidth: "var(--hero-div-w)" }}
      >
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
        aria-label="Download CV (PDF)"
        className="mt-2 inline-block mr-4 phone-sm:mt-4 phone-sm:mr-8 tablet-sm:mr-16 tablet-sm:mt-3 rounded-lg bg-accent-red text-white px-4 py-2.5 text-sm tablet-md:mr-30 desktop-sm:ml-2 desktop-sm:mt-4 desktop-xl:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2 focus-visible:rounded-lg focus-visible:ring-offset-bg [@media(min-width:1920px)_and_(min-height:1440px)]:text-lg"
      >
        Download CV <span className="opacity-70">(PDF)</span>
      </a>
    </section>
  );
};

export default About;
