import ExternalProjectLink from "../components/ExternalProjectLink";
import ProjectScreen from "../components/ProjectScreen";
import ProjectDesc from "../components/ProjectDesc";
import { projects, type ProjectId } from "../data/projects";

interface ProjectSectionProps {
  projectId: ProjectId;
  sectionNumber: string;
  sectionClassName?: string;
  screenContainerClassName?: string;
  projectDescClassName?: string;
  projectScreenClassName?: string;
}

const ProjectSection = ({
  projectId,
  sectionNumber,
  sectionClassName = "",
  screenContainerClassName = "",
  projectDescClassName = "",
  projectScreenClassName = "",
}: ProjectSectionProps) => {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;

  return (
    <section
      id={`${projectId}-section`}
      aria-labelledby={`${projectId}-heading`}
      className={`relative h-auto tablet-sm:ml-5 p-8 desktop-lg:ml-10 ${sectionClassName}`}
    >
      <div className="desktop-sm:grid desktop-sm:items-start desktop-sm:gap-y-4 desktop-sm:gap-x-8 desktop-sm:grid-cols-2 desktop-md:gap-y-2">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1 leading-9 tablet-sm:leading-12 ">
          <p
            className="text-text text-(length:--font-page-number) leading-5"
            aria-hidden="true"
          >
            {sectionNumber}
          </p>
          <h3
            id={`${projectId}-heading`}
            className="text-[2.75rem] desktop-sm:text-5xl text-grey-2 font-medium uppercase desktop-sm:leading-15"
          >
            {project.title}
          </h3>
          <div
            className="border-l border-grey-2"
            style={{ borderLeftWidth: "var(--hero-div-w)" }}
          >
            <p className="mt-2 text-(length:--font-body-sm) tablet-md:text-lg pl-2 text-text leading-loose tracking-wide w-full wrap-break-word whitespace-normal max-w-(--max-w-text-sm) desktop-sm:max-w-(--max-w-text-lg) desktop-xl:text-2xl">
              {project.descriptionShort}
            </p>
            <ExternalProjectLink
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              projectTitle={project.title}
            />
          </div>
        </div>

        <div
          className={`phone-sm:mt-6 desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 desktop-sm:self-center ${screenContainerClassName}`}
        >
          <ProjectScreen
            projectId={project.id}
            images={project.images}
            technologies={project.technologies}
            imageClasses={project.imageClasses}
            className={projectScreenClassName}
          />
        </div>

        <ProjectDesc
          text={project.descriptionFull ?? ""}
          className={`desktop-sm:row-start-2 ${projectDescClassName}`}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
