import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";

type GitHubLinkProps = {
  liveUrl?: string;
  githubUrl?: string;
};

const GitHubLink = ({ liveUrl, githubUrl }: GitHubLinkProps) => {
  const repoHref = githubUrl ?? "https://github.com/bavayra";
  const repoAria = githubUrl ? "Open GitHub repository" : "Open GitHub profile";

  return (
    <>
      <div>
        <div className="flex flex-row mt-2 items-center gap-1 ml-3 tracking-wide">
          <p className="text-grey-3 phone-md:text-base text-sm desktop-xl:text-2xl tablet-sm:text-lg">
            Check the code on
          </p>
          <a
            href={repoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text"
            aria-label={repoAria}
          >
            <GitHubIcon
              role="img"
              className="w-6 h-6 inline-block ml-1 phone-md:w-8 phone-md:h-8  tablet-sm:h-10 tablet-sm:w-10 hover:scale-110 text-accent-red active:scale-95 duration-300 "
            />
          </a>
        </div>
        {liveUrl && (
          <div className="flex items-center ml-3 phone-lg:ml-3 tablet-sm:text-xl desktop-xl:text-2xl text-accent-red text-base font-semibold ">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span>Live Demo</span>
              <img
                src="/external-link-icon.svg"
                className="w-7 h-7 -mt-1 inline-block desktop-xl:w-9 desktop-xl:h-9"
                alt="Open live demo (opens in new tab)"
              />
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default GitHubLink;
