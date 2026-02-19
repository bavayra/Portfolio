import DotPattern from "../components/DotPattern";

const Hero = () => {
  return (
    <section id="hero" className="py-8 app-fullscreen">
      <div className="grid  [grid-cols:200px_1fr_1fr] [grid-rows:auto_240px_auto]">
        <p className="text-xl text-grey-medium col-start-1 row-start-1">2026</p>
        <h1 className="text-5xl font-semibold text-grey-medium col-start-1 col-span-3 row-start-2">
          Portfolio
        </h1>
        <p className=" text-accent-red font-semibold text-xl col-start-3 row-start-3">
          ALIX BELL
        </p>
      </div>
      <DotPattern />
    </section>
  );
};

export default Hero;
