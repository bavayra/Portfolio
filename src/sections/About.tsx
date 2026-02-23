import { Divider } from "../components/Divider";
import Button from "../components/Button";

const About = () => {
  return (
    <section id="about" className="relative py-8 ml-3">
      <Divider
        widthPx={2}
        heightPx={260}
        leftPx={0}
        color="grey-medium"
        topPx={100}
      />
      <p className="text-text">01</p>
      <h2 className="text-2xl text-grey-medium font-medium">WHO IS SHE</h2>

      <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
        I’m a junior front‑end developer focused on building polished,
        accessible interfaces with React and TypeScript. I care about
        performance and maintainability—using Vite and Tailwind to deliver fast,
        responsive experiences—and enjoy turning designs into clean, well-tested
        code. I’m eager to learn new technologies and contribute to real
        projects.
      </p>

      <Button
        variant="secondary"
        size="small"
        className="mt-2 flex justify-end ml-auto mr-4"
      >
        Download CV
      </Button>
    </section>
  );
};

export default About;
