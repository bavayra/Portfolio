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
        heightPx="var(--hero-divider-h-base)"
        leftPx="clamp(16px, 2vw, 24px)"
        color="grey-2"
        topPx="var(--hero-divider-top-base)"
      />
      <div className="grid grid-cols-1fr grid-rows-1fr">
        <p className="text-base min-[360px]:text-xl text-grey-2 col-start-1 row-start-1 pl-1">
          2026
        </p>
        <h1 className="text-5xl min-[360px]:text-6xl font-semibold text-grey-2 col-start-1 col-span-3 row-start-2 pl-1">
          Portfolio
        </h1>
        <p className=" text-accent-red min-[360px]:text-xl font-bold tracking-wider text-base col-start-3 row-start-3 pr-12">
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
