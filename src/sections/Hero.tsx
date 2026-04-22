import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-8 app-fullscreen relative overflow-hidden flex flex-col leading-5"
    >
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      {/* h1 is visually hidden and the visible name is aria-hidden. This is a
      deliberate trade-off: the h1 gives screen readers and search engines both
      the name and the role together, while the visual design keeps them split
      across the layout. */}
      <div className="hidden desktop-sm:block desktop-sm:h-(--hero-mt) tablet-sm:ml-8 desktop-md:ml-10 relative">
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
      <div className="h-[22rem] mt-2 ml-4 tablet-sm:ml-8 desktop-md:ml-10 relative">
        <div className="absolute left-4 top-0 bottom-8 w-(--hero-div-w) bg-grey-2" />
        <p
          aria-hidden="true"
          className="absolute text-(length:--name-year-size) font-bold text-accent-red tracking-wider right-18 min-[375px]:right-10 tablet-md:right-30 tablet-lg:right-20 desktop-sm:right-40 desktop-md:right-16 desktop-lg:right-74 desktop-lg:text-[3.5rem] desktop-xl:right-100 desktop-xl:text-7xl"
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
