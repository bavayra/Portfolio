import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="py-8 h-screen relative overflow-hidden flex flex-col "
    >
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      {/* h1 is visually hidden and the visible name is aria-hidden. This is a
      deliberate trade-off: the h1 gives screen readers and search engines both
      the name and the role together, while the visual design keeps them split
      across the layout. */}
      <div className="hidden desktop-sm:block tablet-sm:ml-8 relative">
        <div className="absolute bg-grey-2 left-(--hero-top-div-left) top-0 min-h-(--hero-top-div-min-h) w-(--hero-div-w)" />
      </div>

      <div
        className="relative grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] ml-3 tablet-sm:ml-8 desktop-sm:translate-y-[70%]"
        aria-hidden="true"
      >
        <p className="col-start-1 row-start-1 pl-3 text-(length:--year-font-size) text-grey-2">
          2026
        </p>

        <p className="col-start-1 row-start-2 leading-(--hero-line-height) pl-3 text-(length:--h1-font-size) font-semibold text-grey-2">
          Portfolio
        </p>

        <p className="col-start-1 col-span-2 row-start-3 text-(length:--name-font-size) font-bold text-accent-red tracking-wider pl-(--name-pl-size)">
          ALIX BELL
        </p>
      </div>
      <div
        className="absolute bg-grey-2 w-(--hero-div-w) left-(--hero-bot-div-left) desktop-sm:left-3.5rem top-(--hero-bot-div-top) min-h-(--hero-bot-div-min-h)"
        style={{
          minHeight:
            window.innerWidth >= 2560 && window.innerHeight >= 1440
              ? "66vh"
              : window.innerWidth >= 1920 && window.innerHeight >= 1440
                ? "60vh"
                : window.innerWidth >= 1920 && window.innerHeight >= 1200
                  ? "55vh"
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
