import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-8 min-h-dvh relative overflow-hidden flex flex-col "
    >
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      {/* h1 is visually hidden and the visible name is aria-hidden. This is a
      deliberate trade-off: the h1 gives screen readers and search engines both
      the name and the role together, while the visual design keeps them split
      across the layout. */}
      <div className="hidden desktop-sm:block tablet-sm:ml-8 relative">
        <div className="absolute bg-grey-2 left-5 top-0 min-h-42 w-(--hero-div-w) desktop-lg:left-6 desktop-xl:min-h-48 desktop-2xl:min-h-62" />
      </div>

      <div
        className="relative grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] ml-3 tablet-sm:ml-8 desktop-sm:translate-y-[70%]"
        aria-hidden="true"
      >
        <p className="col-start-1 row-start-1 pl-3 text-(length:--name-year-size) text-grey-2 leading-8 phone-md:leading-10 phone-lg:leading-12 desktop-md:leading-16">
          2026
        </p>

        <p className="col-start-1 row-start-2 leading-10 pl-3 text-(length:--h1-size) font-semibold phone-md:leading-12 tablet-sm:leading-18 tablet-lg:text-[8rem] tablet-lg:leading-24 desktop-xl:text-[10rem] desktop-xl:leading-32 desktop-2xl:text-[14rem]  desktop-2xl:leading-44 text-grey-2">
          Portfolio
        </p>

        <p className="col-start-1 col-span-2 row-start-3 text-(length:--name-year-size) leading-10 font-bold text-accent-red tracking-wider pl-[40%] phone-md:leading-12 tablet-sm:pl-[49%] tablet-sm:leading-14 tablet-md:pl-[36%] tablet-lg:pl-[45%] tablet-lg:text-[3.5rem] desktop-sm:pl-[34%] desktop-sm:leading-18  desktop-md:pl-[29%] desktop-lg:leading-20 desktop-xl:pl-[26%] desktop-xl:text-[5rem] desktop-2xl:text-[7rem] desktop-2xl:leading-30">
          ALIX BELL
        </p>
      </div>
      <div
        className="absolute bg-grey-2 w-(--hero-div-w) left-13 top-40 min-h-[25vh] tablet-lg:left-14 tablet-lg:top-46 tablet-lg:min-h-[28vh] desktop-sm:top-84 desktop-sm:min-h-86 desktop-sm:left-13 desktop-md:top-90 desktop-lg:top-96 desktop-lg:min-h-[50vh] desktop-lg:left-14 desktop-xl:top-106 desktop-xl:min-h-[54vh] [@media(min-width:1920px)]:min-h-[58vh] desktop-2xl:top-136"
        style={{
          minHeight:
            window.innerWidth >= 2560 && window.innerHeight >= 1440
              ? "60vh"
              : window.innerWidth >= 1920 && window.innerHeight >= 1440
                ? "68vh"
                : window.innerWidth >= 1920 && window.innerHeight >= 1200
                  ? "62vh"
                  : undefined,
        }}
      />
      <div className="mt-auto">
        <DotPattern />
      </div>
    </section>
  );
};

export default Hero;
