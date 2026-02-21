const GitHubLink = () => {
  return (
    <div className="flex flex-row mt-4 items-center gap-1 ml-3 tracking-wide">
      <p className="text-grey-extra-dark  text-sm">Check the code on</p>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        <img
          src="public\Icons\GitHubIcon.svg"
          alt="GitHub"
          className="w-6 h-6 inline-block ml-1"
        />
      </a>
    </div>
  );
};

export default GitHubLink;
