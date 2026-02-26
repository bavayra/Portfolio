import GitHubIcon from "../assets/Icons/GitHubIcon.svg?react";

const GitHubLink = () => {
  return (
    <div className="flex flex-row mt-4 items-center gap-1 ml-3 tracking-wide">
      <p className="text-grey-3  phone-md:text-base text-sm">
        Check the code on
      </p>
      <a
        href="https://github.com/bavayra"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text"
        aria-label="Open GitHub profile"
      >
        <GitHubIcon
          role="img"
          className="w-6 h-6 inline-block ml-1 phone-md:w-8 phone-md:h-8 hover:scale-110 text-accent-red active:scale-95 duration-300 "
        />
      </a>
    </div>
  );
};

export default GitHubLink;
