import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-8 app-fullscreen relative overflow-hidden flex flex-col"
    >
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      {/* h1 is visually hidden and the visible name is aria-hidden. This is a
      deliberate trade-off: the h1 gives screen readers and search engines both
      the name and the role together, while the visual design keeps them split
      across the layout. */}
      <div className="hidden desktop-sm:block desktop-sm:h-(--hero-mt) tablet-sm:ml-8 desktop-md:ml-10 relative">
        <div className="absolute left-0 top-4 min-h-88 w-(--hero-div-w) bg-grey-2" />
      </div>

      <div
        className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] ml-4 phone-md:ml-4 tablet-sm:ml-8 desktop-md:ml-10 relative"
        aria-hidden="true"
      >
        <p className="col-start-1 row-start-1 pl-3 text-(length:--name-year-size) text-grey-2 leading-8 phone-md:leading-10 phone-lg:leading-12 desktop-md:leading-16">
          2026
        </p>

        <p className="col-start-1 row-start-2 pl-3 text-(length:--h1-size) leading-10 phone-md:leading-12 tablet-sm:leading-18 desktop-sm:leading-22 font-semibold text-grey-2">
          Portfolio
        </p>

        <p className="col-start-1 col-span-2 row-start-3 pl-[50%] phone-md:pl-[55%] tablet-sm:pl-[45%] desktop-sm:pl-[40%] desktop-md:pl-[35%] desktop-lg:pl-[30%] text-(length:--name-year-size) font-bold text-accent-red tracking-wider desktop-lg:text-[3.5rem] desktop-xl:text-7xl leading-10 phone-md:leading-12 tablet-sm:leading-14 desktop-md:leading-18 desktop-lg:leading-20">
          ALIX BELL
        </p>
      </div>
      <div className="absolute left-4 top-[clamp(5rem,calc(21.6667vw+2px),8.25rem)] bottom-0  min-h-[30vh] w-(--hero-div-w) bg-grey-2 " />
      <div className="mt-auto">
        <DotPattern />
      </div>
    </section>
  );
};

export default Hero;
