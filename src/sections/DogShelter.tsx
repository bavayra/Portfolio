import Divider from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

import ProjectScreen from "../components/ProjectScreen";
import { projects } from "../data/projects";
import ProjectDesc from "../components/ProjectDesc";

const DogShelter = () => {
  const project = projects.find((p) => p.id === "dog-shelter");

  if (!project) return null;
  return (
    <section className="relative h-auto pt-8 ml-3 pb-8 tablet-sm:ml-12 desktop-sm:pb-0 desktop-md:pb-10 desktop-lg:ml-10">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-md-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <div className="desktop-sm:grid desktop-sm:grid-cols-2 desktop-sm:gap-6 desktop-sm:items-start">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p
            className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-xl:text-4xl"
            aria-hidden="true"
          >
            05
          </p>
          <h3 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl phone-lg:text-4xl tablet-md:my-2 desktop-xl:text-5xl">
            DOG SHELTER WEB
          </h3>
          <p className="mt-2 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal phone-sm:max-w-[17rem] phone-sm:text-sm phone-md:text-base phone-md:max-w-[19rem] phone-lg:max-w-[20rem] tablet-sm:max-w-[22rem] tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32rem] desktop-xl:text-2xl">
            A web app for a real dog shelter - browse adoptable dogs, filter by
            breed, age or gender, swipe through each dog's photo gallery, check
            shelter statistics, and reach out through a contact form with
            built‑in validation.
          </p>
          <GitHubLink liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx="var(--shelter-screen-div-height)"
          leftPx={0}
          color="grey-2"
          topPx="var(--shelter-screen-div-top)"
          className="desktop-sm:hidden"
        />

        <div className="ml-3 phone-sm:mt-6 desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 desktop-md:-mt-2">
          <ProjectScreen
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
          />
        </div>

        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className="desktop-sm:-translate-y-[18%] desktop-md:max-w-[45rem] desktop-md:-translate-x-1/4 desktop-md:mt-6 desktop-xl:mt-12"
        />
      </div>
    </section>
  );
};

export default DogShelter;
