import { Divider } from "../components/Divider";
import Button from "../components/Button";

const About = () => {
  return (
    <section id="about" className="relative py-12">
      <Divider
        widthPx={2}
        heightPx={88}
        leftPx={0}
        color="grey-medium"
        topPx={8}
      />
      <p>01</p>
      <h2 className="text-2xl font-semibold">WHO IS SHE</h2>
      <p className="mt-2 text-sm text-gray-600">
        I’m a junior front‑end developer focused on building polished,
        accessible interfaces with React and TypeScript. I care about
        performance and maintainability—using Vite and Tailwind to deliver fast,
        responsive experiences—and enjoy turning designs into clean, well-tested
        code. I’m eager to learn new technologies and contribute to real
        projects.
      </p>
      <Button variant="secondary" size="small">
        Download CV
      </Button>
    </section>
  );
};

export default About;
