import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";
{
  /*import { Circle } from "../components/Circle";*/
}

const Hero = () => {
  return (
    <section id="hero" className="py-8 app-fullscreen relative overflow-hidden">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-top)"
        className="ml-8 tablet-sm:ml-14"
      />
      <div className="grid grid-cols-1fr ml-4 desktop-sm:translate-y-full desktop-sm:mt-0 min-[390px]:mt-10 phone-md:ml-4 phone-lg:leading-14 tablet-sm:leading-16 leading-10 tablet-md:mt-40 tablet-lg:mt-52 phone-lg:mt-10 tablet-sm:mt-36 tablet-sm:ml-8 grid-rows-1fr">
        <p className=" text-[length:var(--name-year-size)] text-grey-2 tablet-lg:text-4xl col-start-1 row-start-1 pl-3 ">
          2026
        </p>
        <h1 className="text-[length:var(--h1-size)] desktop-sm:text-8xl font-semibold text-grey-2 tablet-lg:text-9xl col-start-1 col-span-3 row-start-2 pl-3 ">
          Portfolio
        </h1>
        <p className="text-[length:var(--name-year-size)] xl:mr-80 desktop-sm:col-start-2 desktop-sm:text-4xl tablet-lg:text-5xl tablet-lg:pr-20  text-accent-red tablet-md:pr-30 font-bold tracking-wider col-start-3 min-[375px]:pr-10 row-start-3 pr-8">
          ALIX BELL
        </p>
      </div>
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-2-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-2-top)"
        className="ml-8 tablet-sm:ml-14 hidden desktop-sm:block"
      />
      <DotPattern />
    </section>
  );
};

export default Hero;
