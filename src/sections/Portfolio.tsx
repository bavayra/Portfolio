import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

import ProjectScreen from "../components/ProjectScreen";
import { projects } from "../../data/projects";
import ProjectDesc from "../components/ProjectDesc";

export const Portfolio = () => {
  const project = projects.find((p) => p.id === "portfolio-project");
  if (!project) return null;
  return (
    <section
      id="projects"
      className="relative desktop-lg:ml-10 pt-8 desktop-md:pt-0 pb-16 ml-3 tablet-sm:ml-12"
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-2xs-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <div className="desktop-sm:grid desktop-sm:grid-cols-2  desktop-md:gap-y-2 desktop-sm:gap-6 desktop-sm:items-start">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">06</p>
          <h2 className="text-2xl tablet-md:my-2 desktop-xl:text-5xl phone-sm:text-3xl desktop-sm:text-4xl tablet-md:text-5xl phone-lg:text-4xl text-grey-2 font-medium">
            THIS PORTFOLIO <span className="text-accent-red font-bold">:)</span>
          </h2>
          <p className="mt-2 text-xs desktop-xl:max-w-120 desktop-xl:text-xl phone-lg:pl-2 desktop-sm:max-w-92 desktop-sm:text-base phone-lg:max-w-80 tablet-md:max-w-116 tablet-sm:text-lg tablet-sm:max-w-92 phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
            A responsive, performance‑focused personal portfolio showcasing my
            projects, process and measurable improvements. Built with modern
            tooling to demonstrate UI implementation, accessibility and
            deployment practices.
          </p>
          <GitHubLink liveUrl={project.liveUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx="var(--portfolio-screen-div-height)"
          leftPx={0}
          color="grey-2"
          topPx="var(--portfolio-screen-div-top)"
          className="desktop-sm:hidden"
        />
        <div className="desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 phone-md:mx-auto py-2 ml-3 max-w-70 rounded-xl phone-md:max-w-76">
          <ProjectScreen
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            links={{ live: project.liveUrl }}
            className="phone-md:gap-x-6"
          />
        </div>
        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className="desktop-md:max-w-166 desktop-md:-translate-x-1/3 desktop-lg:mt-3 desktop-xl:text-lg"
        />
      </div>
    </section>
  );
};

export default Portfolio;
