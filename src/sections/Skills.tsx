import Divider from "../components/Divider";
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
    <section className="relative py-8 ml-3 tablet-sm:ml-12 desktop-sm:ml-0">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-xl-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
        className="desktop-sm:hidden"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-sm:flex desktop-sm:justify-end desktop-sm:mr-10  desktop-md:text-3xl desktop-xl:text-4xl">
        02
      </p>
      <h2 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl phone-lg:text-4xl tablet-md:my-2 tablet-md:text-5xl desktop-sm:text-4xl desktop-sm:flex desktop-sm:justify-end desktop-sm:mr-10 desktop-xl:text-5xl ">
        HER SKILLS
      </h2>
      <div className="grid grid-cols-3 gap-3 mt-4 mx-auto justify-items-center  gap-x-0 w-3xs phone-sm:gap-y-6 phone-sm:mt-8 phone-md:gap-x-12 tablet-sm:mt-10 tablet-sm:gap-y-12 tablet-sm:w-sm desktop-sm:gap-x-0 desktop-sm:gap-y-6 desktop-xl:gap-y-10 desktop-xl:gap-x-16 ">
        {skills.map(({ percent, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 phone-sm:gap-3 tablet-sm:gap-5 "
          >
            <CircleStatic
              percent={percent}
              ariaLabel={label}
              className="phone-sm:scale-120 desktop-sm:scale-130 desktop-xl:scale-160 tablet-sm:scale-150 phone-sm:[--skill-percent-size:.8rem]"
            />
            <span className="text-[0.65rem] text-text phone-sm:text-xs phone-lg:text-sm tablet-sm:text-base desktop-sm:text-sm desktop-xl:text-lg">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
