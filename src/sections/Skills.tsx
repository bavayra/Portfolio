import { Divider } from "../components/Divider";
import CircleStatic from "../components/SkillBadge";

const Skills = () => {
  return (
    <section id="about" className="relative py-12 ml-3">
      <Divider
        widthPx={2}
        heightPx={260}
        leftPx={0}
        color="grey-medium"
        topPx={116}
      />
      <p className="text-grey-dark">02</p>
      <h2 className="text-2xl text-grey-medium font-medium">HER SKILLS</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <CircleStatic percent={90} />
        <CircleStatic percent={75} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
        <CircleStatic percent={60} />
      </div>
    </section>
  );
};

export default Skills;
