const About = () => {
  return (
    <section
      id="about"
      className="relative py-8 ml-3 tablet-sm:ml-12 tablet-md:pb-0 desktop-lg:ml-10 desktop-xl:pb-12"
    >
      <p
        className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-md:text-3xl desktop-xl:text-4xl"
        aria-hidden="true"
      >
        01
      </p>
      <h3 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl phone-lg:text-4xl tablet-md:text-5xl tablet-md:my-2 desktop-sm:text-4xl desktop-xl:text-5xl">
        WHO IS SHE
      </h3>

      <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 break-words whitespace-normal phone-sm:text-sm phone-sm:max-w-[17rem] phone-md:text-base phone-md:max-w-[19rem] phone-lg:max-w-80 phone-lg:pl-2 tablet-sm:max-w-[23rem] tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32.5rem] desktop-xl:text-2xl border-l-2 border-grey-2">
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
        className="mt-2 inline-block justify-end mr-4 ml-auto phone-sm:mt-4 phone-sm:mr-8 tablet-sm:mr-16 tablet-sm:mt-0 rounded-sm bg-accent-red text-white px-3 py-2 text-sm tablet-md:mr-[7.5rem] desktop-sm:ml-6 desktop-sm:mt-4"
      >
        Download CV
      </a>
    </section>
  );
};

export default About;
