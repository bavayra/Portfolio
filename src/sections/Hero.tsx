import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="pt-8 h-screen relative overflow-hidden flex flex-col ">
      <h1 id="hero-heading" className="sr-only">
        Alix Bell — Junior Frontend Developer
      </h1>
      {/* h1 is visually hidden and the visible name is aria-hidden. This is a
      deliberate trade-off: the h1 gives screen readers and search engines both
      the name and the role together, while the visual design keeps them split
      across the layout. */}
      <div className="hidden desktop-sm:block tablet-sm:ml-8 relative">
        <div className="absolute bg-grey-2 left-[var(--hero-top-div-left)] top-0 min-h-[var(--hero-top-div-min-h)] w-[var(--hero-div-w)]" />
      </div>

      <div
        className="relative grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] ml-3 tablet-sm:ml-8 desktop-sm:translate-y-[70%]"
        aria-hidden="true"
      >
        <p className="col-start-1 row-start-1 pl-3 text-[length:var(--year-font-size)] text-grey-2">2026</p>

        <p className="col-start-1 row-start-2 leading-[var(--hero-line-height)] pl-3 text-[length:var(--h1-font-size)] font-semibold text-grey-2">
          Portfolio
        </p>

        <p className="col-start-1 col-span-2 row-start-3 text-[length:var(--name-font-size)] font-bold text-accent-red tracking-wider pl-[var(--name-pl-size)]">
          ALIX BELL
        </p>
      </div>

      <div className="absolute bg-grey-2 w-[var(--hero-div-w)] left-[var(--hero-bot-div-left)] desktop-sm:left-3.5rem top-[var(--hero-bot-div-top)] min-h-[var(--hero-bot-div-min-h)]" />
      <div className="mt-auto">
        <DotPattern />
      </div>
    </section>
  );
};

export default Hero;
