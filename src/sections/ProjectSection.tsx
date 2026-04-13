import Divider, { type CssLength } from "../components/Divider";
import GitHubLink from "../components/GitHubLink";
import ProjectScreen from "../components/ProjectScreen";
import ProjectDesc from "../components/ProjectDesc";
import { projects } from "../data/projects";

interface ProjectSectionProps {
  projectId: string;
  sectionNumber: string;
  blockDivHeightVar: CssLength;
  screenDivHeightVar: CssLength;
  screenDivTopVar: CssLength;
  sectionClassName?: string;
  screenContainerClassName?: string;
  projectDescClassName?: string;
  projectScreenClassName?: string;
}

const ProjectSection = ({
  projectId,
  sectionNumber,
  blockDivHeightVar,
  screenDivHeightVar,
  screenDivTopVar,
  sectionClassName = "",
  screenContainerClassName = "",
  projectDescClassName = "",
  projectScreenClassName,
}: ProjectSectionProps) => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <section
      className={`relative ml-3 h-auto tablet-sm:ml-12 desktop-lg:ml-10 ${sectionClassName}`}
    >
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx={blockDivHeightVar}
        leftPx={0}
        color="grey-2"
        topPx="var(--block-div-top)"
      />
      <div className="desktop-sm:grid desktop-sm:items-start desktop-sm:gap-6 desktop-sm:grid-cols-2 desktop-md:gap-y-2">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p
            className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-xl:text-4xl"
            aria-hidden="true"
          >
            {sectionNumber}
          </p>
          <h3 className="text-2xl text-grey-2 font-medium phone-sm:text-3xl phone-lg:text-4xl tablet-md:my-2 desktop-xl:text-5xl">
            {project.title.toUpperCase()}
          </h3>
          <p className="mt-2 text-xs text-text leading-loose tracking-wide ml-3 w-full max-w-60 wrap-break-words whitespace-normal phone-sm:text-sm phone-sm:max-w-[17rem] phone-md:text-base phone-md:max-w-[19rem] phone-lg:max-w-[20rem] tablet-sm:max-w-[22rem] tablet-md:max-w-[29rem] desktop-sm:max-w-[23rem] desktop-xl:max-w-[32rem] desktop-xl:text-2xl">
            {project.descriptionShort}
          </p>
          <GitHubLink liveUrl={project.liveUrl} githubUrl={project.githubUrl} />
        </div>

        <Divider
          widthPx="var(--hero-div-w)"
          heightPx={screenDivHeightVar}
          leftPx={0}
          color="grey-2"
          topPx={screenDivTopVar}
          className="desktop-sm:hidden"
        />

        <div
          className={`ml-3 phone-sm:mt-6 desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 ${screenContainerClassName}`}
        >
          <ProjectScreen
            projectId={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            technologies={project.technologies}
            className={projectScreenClassName}
          />
        </div>

        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className={projectDescClassName}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
