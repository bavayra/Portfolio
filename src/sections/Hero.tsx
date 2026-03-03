import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";
{
  /*import { Circle } from "../components/Circle";*/
}

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-8 app-fullscreen relative overflow-hidden "
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--hero-div-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--hero-div-top)"
        className="ml-8 min-[390px]:ml-10 min-[428px]:ml-12 tablet-sm:ml-6 phone-lg:ml-10"
      />
      <div className="grid grid-cols-1fr phone-md:ml-4 phone-lg:mt-10 tablet-sm:mt-26 grid-rows-1fr">
        <p className="text-base phone-sm:text-xl text-grey-2 min-[390px]:text-2xl phone-lg:text-3xl col-start-1 row-start-1 pl-3 ">
          2026
        </p>
        <h1 className="text-5xl phone-sm:text-6xl font-semibold text-grey-2 col-start-1  tablet-sm:text-8xl col-span-3 row-start-2 pl-3 phone-lg:text-7xl min-[375px]:pl-1">
          Portfolio
        </h1>
        <p className=" text-accent-red phone-sm:text-2xl phone-md:text-3xl tablet-sm:text-4xl font-bold tracking-wider text-base col-start-3 min-[375px]:pr-10 row-start-3 pr-8">
          ALIX BELL
        </p>
      </div>

      <DotPattern />
    </section>
  );
};

export default Hero;
