import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";
import { Circle } from "../components/Circle";

const Hero = () => {
  return (
    <section id="hero" className="py-8 app-fullscreen">
      <Divider
        widthPx={2}
        heightPx={88}
        leftPx={20}
        color="grey-2"
        topPx={112}
      />
      <div className="grid grid-cols-1fr grid-rows-1fr">
        <p className="text-md text-grey-2 col-start-1 row-start-1 pl-1">2026</p>
        <h1 className="text-5xl font-semibold text-grey-2 col-start-1 col-span-3 row-start-2 pl-1">
          Portfolio
        </h1>
        <p className=" text-accent-red font-bold tracking-wider text-md col-start-3 row-start-3 pr-12">
          ALIX BELL
        </p>
      </div>

      <Circle
        className="circle-drop"
        sizes={{ mobile: 0.6, tablet: 0.8, desktop: 1.2 }}
        topRem={11.25}
        rightRem={1.35}
      />
      <Circle
        className="circle-drop"
        sizes={{ mobile: 0.6, tablet: 0.8, desktop: 1.2 }}
        topRem={11.25}
        rightRem={3.2}
        style={{ animationDelay: "0.75s" }}
      />
      <DotPattern />
    </section>
  );
};

export default Hero;
