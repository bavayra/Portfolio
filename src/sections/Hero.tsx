import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-8 app-fullscreen relative overflow-y-hidden overflow-x-visible flex flex-col"
    >
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      <div className="hidden desktop-sm:block desktop-sm:h-(--hero-mt) ml-4 tablet-sm:ml-8 desktop-md:ml-10 relative">
        <div className="absolute left-0 top-4 bottom-0 w-(--hero-div-w) bg-grey-2" />
      </div>
      <div
        className="ml-4 phone-md:ml-4 tablet-sm:ml-8 desktop-md:ml-10"
        aria-hidden="true"
      >
        <p className="pl-3 text-(length:--name-year-size) text-grey-2 leading-[clamp(2.5rem,3vw+1rem,5rem)]">
          2026
        </p>
        <p className="pl-3 text-(length:--h1-size) font-semibold text-grey-2 leading-[clamp(2.5rem,3vw+1rem,5rem)]">
          Portfolio
        </p>
      </div>
      <div className="h-[clamp(4rem,32vh,14rem)] mt-2 ml-4 tablet-sm:ml-8 desktop-md:ml-10 relative">
        <div className="absolute left-0 top-0 bottom-8 w-(--hero-div-w) bg-grey-2" />
        <p
          aria-hidden="true"
          className="pl-3 absolute text-(length:--name-year-size) font-bold text-accent-red tracking-wider top-4 right-8 min-[375px]:right-10 tablet-md:right-30 tablet-lg:right-20 desktop-sm:right-40 desktop-md:right-16 desktop-lg:right-74 desktop-lg:text-[3.5rem] desktop-xl:right-100 desktop-xl:text-7xl"
        >
          ALIX BELL
        </p>
      </div>
      <div className="mt-auto">
        <DotPattern />
      </div>
    </section>
  );
};

export default Hero;
