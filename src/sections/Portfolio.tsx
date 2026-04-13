import Divider from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

import ProjectScreen from "../components/ProjectScreen";
import { projects } from "../data/projects";
import ProjectDesc from "../components/ProjectDesc";

const Portfolio = () => {
  const project = projects.find((p) => p.id === "portfolio-project");
  if (!project) return null;
  return (
    <section className="relative pt-8 pb-20 ml-3 h-auto tablet-sm:ml-12 desktop-md:pt-0 desktop-lg:ml-10">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-2xs-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
        className="desktop-md:-mt-8"
      />
      <div className="desktop-sm:gap-6 desktop-sm:items-start desktop-sm:grid desktop-sm:grid-cols-2 desktop-md:gap-y-2">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p
            className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-xl:text-4xl"
            aria-hidden="true"
          >
            06
          </p>
          <h3 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl  phone-lg:text-4xl tablet-md:my-2 desktop-xl:text-5xl">
            THIS PORTFOLIO <span className="text-accent-red font-bold">:)</span>
          </h3>
          <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal phone-sm:text-sm phone-sm:max-w-[17rem] phone-md:text-base phone-md:max-w-[19rem] phone-lg:max-w-[20rem] tablet-sm:max-w-[22rem] tablet-sm:pl-0 tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32rem] desktop-xl:text-2xl">
            My personal portfolio — a single‑page showcase of projects, skills
            with animated progress badges, and a contact form. Sections reveal
            on scroll, the design adapts from 320 px phones to ultrawide
            displays, and everything switches seamlessly to dark mode.
          </p>
          <GitHubLink liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx="var(--portfolio-screen-div-height)"
          leftPx={0}
          color="grey-2"
          topPx="var(--portfolio-screen-div-top)"
          className="desktop-sm:hidden"
        />
        <div className=" ml-3 rounded-xl phone-sm:mt-6 desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2">
          <ProjectScreen
            projectId={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            className="phone-md:gap-x-2 phone-lg:gap-x-0"
          />
        </div>
        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className="desktop-md:max-w-[45rem] desktop-md:mt-4 desktop-md:-translate-x-1/4 desktop-lg:mt-3 desktop-xl:text-lg desktop-sm:mt-0"
        />
      </div>
    </section>
  );
};

export default Portfolio;
