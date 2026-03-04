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
        heightPx={148}
        leftPx={0}
        color="grey-2"
        topPx={24}
        className="ml-8 tablet-sm:ml-14"
      />
      <div className="grid grid-cols-1fr ml-4 min-[390px]:mt-10 phone-md:ml-4 min-[428px]:leading-16 leading-12 tablet-md:mt-40 tablet-lg:mt-52 phone-lg:mt-10 tablet-sm:mt-36 tablet-sm:ml-8 grid-rows-1fr">
        <p className=" text-3xl text-grey-2 tablet-lg:text-4xl col-start-1 row-start-1 pl-3 ">
          2026
        </p>
        <h1 className=" text-7xl font-semibold text-grey-2 tablet-lg:text-9xl col-start-1 tablet-sm:text-8xl col-span-3 row-start-2 pl-3 ">
          Portfolio
        </h1>
        <p className="text-3xl tablet-lg:text-5xl tablet-lg:pr-20  text-accent-red tablet-md:pr-30 tablet-sm:text-4xl font-bold tracking-wider col-start-3 min-[375px]:pr-10 row-start-3 pr-8">
          ALIX BELL
        </p>
      </div>

      <DotPattern />
    </section>
  );
};

export default Hero;
