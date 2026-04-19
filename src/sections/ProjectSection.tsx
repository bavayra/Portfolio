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
      className={`relative ml-3 h-auto tablet-sm:ml-12 desktop-lg:ml-10 ${sectionClassName}`}
    >
      <div className="desktop-sm:grid desktop-sm:items-start desktop-sm:gap-6 desktop-sm:grid-cols-2 desktop-md:gap-y-2">
        <div className="desktop-sm:col-start-1 desktop-sm:row-start-1">
          <p
            className="text-text text-(length:--font-page-number)"
            aria-hidden="true"
          >
            {sectionNumber}
          </p>
          <h3
            id={`${projectId}-heading`}
            className="text-(length:--font-section-label) text-grey-2 font-medium tablet-md:my-2 uppercase"
          >
            {project.title}
          </h3>

          <p className="mt-2 text-(length:--font-body-sm) border-l-2 border-grey-2 pl-3 text-text leading-loose tracking-wide ml-3 w-full wrap-break-word whitespace-normal max-w-(--max-w-text-sm) desktop-sm:max-w-(--max-w-text-lg) desktop-xl:text-2xl">
            {project.descriptionShort}
          </p>
          <ExternalProjectLink
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            projectTitle={project.title}
          />
        </div>

        <div
          className={`ml-3 phone-sm:mt-6 desktop-sm:col-start-2 desktop-sm:row-start-1 desktop-sm:row-span-2 ${screenContainerClassName}`}
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
          className={projectDescClassName}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
