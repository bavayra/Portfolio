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
      <div className="grid grid-cols-1fr mt-[var(--hero-mt)] ml-4 desktop-sm:translate-y-[75%] desktop-md:ml-10 desktop-sm:leading-18 desktop-lg:leading-20 phone-md:ml-4 phone-lg:leading-12 tablet-sm:leading-16 leading-10 tablet-sm:ml-8 grid-rows-1fr">
        <p className=" text-[length:var(--name-year-size)] text-grey-2 col-start-1 row-start-1 pl-3 ">
          2026
        </p>
        <h1 className="text-[length:var(--h1-size)] font-semibold text-grey-2 col-start-1 col-span-3 row-start-2 pl-3 ">
          Portfolio
        </h1>
        <p className="text-[length:var(--name-year-size)] desktop-md:mr-16 desktop-sm:col-start-2 desktop-xl:mr-60 desktop-sm:mr-40 tablet-lg:pr-20  text-accent-red tablet-md:pr-30 font-bold desktop-md:mt-4 tracking-wider col-start-3 min-[375px]:pr-10 desktop-lg:mr-74 desktop-lg:text-[3.5rem] row-start-3 pr-8">
          ALIX BELL
        </p>
      </div>
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-2-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-2-top)"
        className="ml-8 tablet-sm:ml-16 hidden desktop-sm:block desktop-lg:ml-14"
      />
      <DotPattern />
    </section>
  );
};

export default Hero;
