import { Divider } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";

import ProjectScreen from "../components/ProjectScreen";
import { projects } from "../../data/projects";
import ProjectDesc from "../components/ProjectDesc";

export const WeatherApp = () => {
  const project = projects.find((p) => p.id === "weather-app");
  if (!project) return null;

  return (
    <section
      id="projects"
      className="relative pt-8 ml-3 desktop-sm:pb-0 h-auto desktop-lg:ml-10 desktop-lg:mt-10 tablet-sm:ml-12 pb-8"
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--block-div-lg-h)"
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <div className="desktop-sm:grid desktop-sm:grid-cols-2 desktop-md:gap-y-2 desktop-sm:gap-6 desktop-sm:items-start ">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-xl:text-4xl ">
            04
          </p>
          <h2 className="text-2xl desktop-xl:text-5xl desktop-sm:text-4xl tablet-md:my-2 phone-sm:text-3xl phone-lg:text-4xl text-grey-2 font-medium">
            WEATHER APP
          </h2>
          <p className="mt-2 desktop-xl:max-w-120 desktop-xl:text-2xl desktop-sm:max-w-92 desktop-sm:text-base tablet-md:max-w-116 text-xs phone-lg:max-w-80 tablet-sm:text-base tablet-sm:max-w-92 phone-sm:text-sm phone-md:text-base phone-md:max-w-76 phone-sm:max-w-68 text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal">
            A weather app with dark and light themes that shows current
            conditions, hourly and daily forecasts, and an interactive map. Save
            your favorite cities, switch between °C and °F, or let the browser
            detect your location - all in a fast, smooth mobile interface.
          </p>
          <GitHubLink liveUrl={project.liveUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx="var(--weather-screen-div-height)"
          leftPx={0}
          color="grey-2"
          topPx="var(--weather-screen-div-top)"
          className="desktop-sm:hidden"
        />
        <div className="desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 desktop-md:mt-10 phone-sm:mt-6 desktop-lg:mt-4 ml-3">
          <ProjectScreen
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            links={{ live: project.liveUrl }}
          />
        </div>
        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className="desktop-md:max-w-180 desktop-md:mt-14 desktop-md:-translate-x-1/4 desktop-sm:-translate-y-[30%]"
        />
      </div>
    </section>
  );
};

export default WeatherApp;
