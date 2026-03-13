import { Divider } from "../components/Divider";
import Button from "../components/Button";

const About = () => {
  return (
    <section id="about" className="relative py-8 ml-3 tablet-sm:ml-12">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-lg-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">01</p>
      <h2 className="text-2xl text-grey-2 desktop-sm:text-4xl tablet-md:my-2 phone-sm:text-3xl phone-lg:text-4xl tablet-md:text-5xl font-medium">
        WHO IS SHE
      </h2>

      <p className="mt-2 text-xs desktop-sm:max-w-92 desktop-sm:text-base tablet-md:max-w-116 phone-lg:max-w-80 phone-md:text-base tablet-sm:text-lg tablet-sm:max-w-92 phone-lg:pl-2 phone-md:max-w-76 phone-sm:text-sm phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
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
        className="mt-2 flex justify-end desktop-sm:ml-6 ml-auto phone-sm:mt-4 phone-sm:mr-8 mr-4 tablet-md:mr-20 tablet-sm:mr-16"
      >
        Download CV
      </Button>
    </section>
  );
};

export default About;
