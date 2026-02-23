import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";

const GitHubLink = () => {
  return (
    <div className="flex flex-row mt-4 items-center gap-1 ml-3 tracking-wide">
      <p className="text-grey-extra-dark  text-sm">Check the code on</p>
      <a
        href="https://github.com/bavayra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-grey-dark"
        aria-label="Open GitHub profile"
      >
        <GitHubIcon
          role="img"
          className="w-6 h-6 inline-block ml-1 hover:scale-110 active:scale-95 duration-300 "
        />
      </a>
    </div>
  );
};

export default GitHubLink;
