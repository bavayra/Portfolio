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
      <div className="hidden desktop-sm:block tablet-sm:ml-8 desktop-md:ml-8 relative">
        <div className="absolute left-5 top-0 min-h-42 w-(--hero-div-w) desktop-lg:left-6 desktop-xl:min-h-48 bg-grey-2" />
      </div>

      <div
        className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] ml-3 tablet-sm:ml-8 desktop-sm:translate-y-[70%] desktop-md:ml-8 relative"
        aria-hidden="true"
      >
        <p className="col-start-1 row-start-1 pl-3 text-(length:--name-year-size) text-grey-2 leading-8 phone-md:leading-10 phone-lg:leading-12 desktop-md:leading-16">
          2026
        </p>

        <p className="col-start-1 row-start-2 pl-3 text-(length:--h1-size) tablet-lg:text-[8rem] leading-10 phone-md:leading-12 tablet-sm:leading-18 tablet-lg:leading-24 font-semibold desktop-xl:text-[10rem] desktop-xl:leading-32 text-grey-2">
          Portfolio
        </p>

        <p className="col-start-1 col-span-2 row-start-3 pl-[40%] tablet-sm:pl-[49%] tablet-md:pl-[36%] tablet-lg:pl-[45%] desktop-sm:pl-[34%] desktop-md:pl-[29%] desktop-lg:pl-[30%] desktop-xl:pl-[26%] text-(length:--name-year-size) font-bold text-accent-red tracking-wider tablet-lg:text-[3.5rem] desktop-xl:text-[5rem] leading-10 phone-md:leading-12 tablet-sm:leading-14 desktop-sm:leading-18 desktop-lg:leading-20">
          ALIX BELL
        </p>
      </div>
      <div
        className="absolute left-13 tablet-lg:left-14 tablet-lg:top-46 top-40 min-h-[25vh] tablet-lg:min-h-[28vh] desktop-sm:top-84 desktop-md:top-90 desktop-sm:min-h-86 desktop-sm:left-13 w-(--hero-div-w) desktop-lg:top-96 desktop-lg:min-h-[50vh] desktop-lg:left-14 desktop-xl:top-106 desktop-xl:min-h-[54vh] [@media(min-width:1920px)]:min-h-[58vh] bg-grey-2"
        style={{
          minHeight: window.innerHeight >= 1200 ? "62vh" : undefined,
        }}
      />
      <div className="mt-auto">
        <DotPattern />
      </div>
    </section>
  );
};

export default Hero;
