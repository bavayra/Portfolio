import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";
{
  /*import { Circle } from "../components/Circle";*/
}

const Hero = () => {
  return (
    <section id="hero" className="py-8 app-fullscreen">
      <Divider
        widthPx={2}
        heightPx={228}
        leftPx={0}
        color="grey-2"
        topPx={"var(--hero-divider-top)"}
        className="ml-8 min-[390px]:ml-10 min-[428px]:ml-12 min-[480px]:ml-14"
      />
      <div className="grid grid-cols-1fr phone-md:ml-4 min-[480px]:ml-0 grid-rows-1fr">
        <p className="text-base phone-sm:text-xl text-grey-2 min-[390px]:text-2xl col-start-1 row-start-1 pl-1">
          2026
        </p>
        <h1 className="text-5xl phone-sm:text-6xl font-semibold text-grey-2 col-start-1 col-span-3 row-start-2 pl-1">
          Portfolio
        </h1>
        <p className=" text-accent-red phone-sm:text-2xl phone-md:text-3xl font-bold tracking-wider text-base col-start-3 row-start-3 pr-12">
          ALIX BELL
        </p>
      </div>

      {/* <Circle
        className="circle-drop"
        sizes={{ mobile: 0.6, tablet: 0.8, desktop: 1.2 }}
        topRem={10}
        rightRem={1.35}
      />
      <Circle
        className="circle-drop"
        sizes={{ mobile: 0.6, tablet: 0.8, desktop: 1.2 }}
        topRem={10}
        rightRem={3.2}
        style={{ animationDelay: "0.75s" }}
      />*/}
      <DotPattern />
    </section>
  );
};

export default Hero;
