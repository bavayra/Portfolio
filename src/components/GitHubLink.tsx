import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";

const GitHubLink = () => {
  return (
    <div className="flex flex-row mt-4 items-center gap-1 ml-3 tracking-wide">
      <p className="text-grey-extra-dark  text-sm">Check the code on</p>
      <a
        href="https://github.com/bavayra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        <GitHubIcon
          role="img"
          aria-label="GitHub"
          className="w-6 h-6 inline-block ml-1"
        />
      </a>
    </div>
  );
};

export default GitHubLink;
