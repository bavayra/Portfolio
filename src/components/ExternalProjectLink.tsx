import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";

type ExternalProjectLinkProps = {
  liveUrl?: string;
  githubUrl?: string;
  projectTitle?: string;
};

const ExternalProjectLink = ({
  liveUrl,
  githubUrl,
  projectTitle,
}: ExternalProjectLinkProps) => {
  return (
    <div>
      {githubUrl && (
        <div className="flex flex-row mt-2 items-center gap-1 ml-2 tracking-wide">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text"
            aria-label={`Check the code on GitHub — ${projectTitle ?? "this project"}`}
          >
            <span className="text-grey-3 phone-md:text-base text-sm desktop-xl:text-2xl tablet-sm:text-lg">
              Check the code on
            </span>
            <GitHubIcon
              aria-hidden="true"
              className="w-6 h-6 inline-block ml-1 phone-md:w-8 phone-md:h-8  tablet-sm:h-10 tablet-sm:w-10 hover:scale-110 text-accent-red active:scale-95 duration-300"
            />
          </a>
        </div>
      )}
      {liveUrl && (
        <div className="flex items-center ml-2 tablet-sm:text-xl desktop-xl:text-2xl text-accent-red text-base font-semibold ">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live Demo: ${projectTitle}`}
            className="inline-flex items-center gap-2"
          >
            <span aria-hidden="true">Live Demo</span>
            <img
              src="/external-link-icon.svg"
              alt=""
              aria-hidden="true"
              className="w-7 h-7 -mt-1 inline-block desktop-xl:w-9 desktop-xl:h-9"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default ExternalProjectLink;
