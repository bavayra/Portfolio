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
    { percent: 75, label: "Tailwind CSS" },
    { percent: 90, label: "Grid/Layout" },
    { percent: 55, label: "ReactJS" },
  ];
  return (
    <section className="relative py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={288}
        leftPx={0}
        color="grey-2"
        topPx={100}
      />
      <p className="text-text">02</p>
      <h2 className="text-2xl text-grey-2 font-medium">HER SKILLS</h2>
      <div className="grid grid-cols-3 gap-3 mt-4 justify-items-center gap-x-0 w-3xs mx-auto">
        {skills.map(({ percent, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <CircleStatic percent={percent} ariaLabel={label} />
            <span className="text-[0.65rem] text-text">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
