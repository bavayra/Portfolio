import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

import ProjectScreen from "../components/ProjectScreen";
import { projects } from "../../data/projects";
import ProjectDesc from "../components/ProjectDesc";

export const DogShelter = () => {
  const project = projects.find((p) => p.id === "dog-shelter");

  if (!project) return null;
  return (
    <section className="relative desktop-lg:ml-10 h-auto pt-8 pb-2 desktop-lg:pb-10 ml-3 tablet-sm:ml-12 ">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-md-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <div className="desktop-sm:grid desktop-sm:grid-cols-2 desktop-sm:gap-6 desktop-sm:items-start">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">06</p>
          <h2 className="text-2xl desktop-sm:text-4xl desktop-xl:text-5xl text-grey-2 tablet-md:my-2  phone-sm:text-3xl phone-lg:text-4xl tablet-md:text-5xl font-medium">
            DOG SHELTER WEB
          </h2>
          <p className="mt-2 phone-lg:max-w-80 desktop-xl:max-w-120 desktop-xl:text-xl desktop-sm:max-w-92 desktop-sm:text-base tablet-md:max-w-116 tablet-sm:text-lg tablet-sm:max-w-92 phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
            A responsive web app for a dog shelter built with React and
            TypeScript. It features a searchable pet gallery with different
            filters, adoption rules, contact/donation section, and accessible
            modals for each dog. The site is mobile‑first and
            performance‑minded.
          </p>
          <GitHubLink liveUrl={project.liveUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx="var(--shelter-screen-div-height)"
          leftPx={0}
          color="grey-2"
          topPx="var(--shelter-screen-div-top)"
          className="desktop-sm:hidden"
        />

        <div className="desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2">
          <ProjectScreen
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            links={{ live: project.liveUrl }}
            pageNumber={project.pageNumber}
          />
        </div>

        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className="desktop-xl:max-w-120 desktop-xl:text-xl desktop-md:col-span-2 desktop-md:max-w-184 desktop-md:-translate-x-1/5 desktop-md:mt-2"
        />
      </div>
    </section>
  );
};

export default DogShelter;
