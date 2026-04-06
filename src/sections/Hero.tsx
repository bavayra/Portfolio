import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-8 app-fullscreen relative overflow-y-hidden overflow-x-visible "
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-top)"
        className="ml-8 tablet-sm:ml-16 desktop-lg:ml-14"
      />
      <div className="grid grid-cols-1fr mt-[var(--hero-mt)] leading-10 grid-rows-1fr ml-4 phone-md:ml-4 phone-lg:leading-12 tablet-sm:ml-8 tablet-sm:leading-16 desktop-sm:translate-y-[75%] desktop-sm:leading-18  desktop-md:ml-10 desktop-lg:leading-20 ">
        <p className=" text-[length:var(--name-year-size)] text-grey-2 col-start-1 row-start-1 pl-3 ">
          2026
        </p>
        <h1 className="text-[length:var(--h1-size)] font-semibold text-grey-2 col-start-1 col-span-3 row-start-2 pl-3 ">
          Portfolio
        </h1>
        <p className="text-[length:var(--name-year-size)] font-bold text-accent-red tracking-wider col-start-3 row-start-3 pr-8 min-[375px]:pr-10 tablet-md:pr-30 tablet-lg:pr-20 desktop-sm:mr-40 desktop-sm:col-start-2 desktop-md:mr-16 desktop-md:mt-4 desktop-lg:mr-74 desktop-lg:text-[3.5rem] desktop-xl:mr-100 desktop-xl:text-7xl ">
          ALIX BELL
        </p>
      </div>
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-2-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-2-top)"
        className="ml-8 hidden tablet-sm:ml-16 desktop-sm:block desktop-lg:ml-14"
      />
      <DotPattern />
    </section>
  );
};

export default Hero;
