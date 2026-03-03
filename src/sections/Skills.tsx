import { Divider } from "../components/Divider";
import CircleStatic from "../components/SkillBadge";

const Skills = () => {
  const skills = [
    { percent: 75, label: "TypeScript" },
    { percent: 90, label: "HTML5" },
    { percent: 90, label: "SCSS" },
    { percent: 75, label: "JavaScript" },
    { percent: 80, label: "Figma" },
    { percent: 50, label: "Vite" },
    { percent: 75, label: "TailwindCSS" },
    { percent: 90, label: "Grid/Layout" },
    { percent: 55, label: "ReactJS" },
  ];
  return (
    <section className="relative py-8 ml-3 tablet-sm:ml-12">
      <Divider
        widthPx={2}
        heightPx="var(--block-div-2xl-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl ">02</p>
      <h2 className="text-2xl tablet-md:my-2 phone-lg:text-4xl text-grey-2 tablet-md:text-5xl phone-sm:text-3xl font-medium">
        HER SKILLS
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-4 tablet-sm:mt-10 phone-sm:mt-8 justify-items-center phone-md:gap-x-12 tablet-sm:gap-y-12 gap-x-0 w-3xs phone-sm:gap-y-6 tablet-sm:w-sm mx-auto">
        {skills.map(({ percent, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 tablet-sm:gap-5 phone-sm:gap-3"
          >
            <CircleStatic
              percent={percent}
              ariaLabel={label}
              className="phone-sm:scale-120 tablet-sm:scale-150 phone-sm:[--skill-percent-size:.8rem]"
            />
            <span className="text-[0.65rem] text-text phone-sm:text-xs tablet-sm:text-base phone-lg:text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
