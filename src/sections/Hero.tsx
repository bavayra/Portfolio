import DotPattern from "../components/DotPattern";
import { Divider } from "../components/Divider";

const Hero = () => {
  return (
    <section id="hero" className="py-8 app-fullscreen">
      <Divider
        widthPx={2}
        heightPx={88}
        leftPx={20}
        color="grey-medium"
        topPx={112}
      />
      <div className="grid [grid-cols:200px_1fr_1fr] [grid-rows:auto_240px_auto]">
        <p className="text-md text-grey-medium col-start-1 row-start-1 pl-1">
          2026
        </p>
        <h1 className="text-5xl font-semibold text-grey-medium col-start-1 col-span-3 row-start-2 pl-1">
          Portfolio
        </h1>
        <p className=" text-accent-red font-semibold text-md col-start-3 row-start-3 pr-12">
          ALIX BELL
        </p>
      </div>
      <DotPattern />
    </section>
  );
};

export default Hero;
