const DotPattern = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full pl-4 tablet-sm:-bottom-22 tablet-sm:mb-6">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="tablet-sm:scale-140 tablet-sm:origin-bottom-center tablet-sm:pl-6"
      >
        <defs>
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="3" fill="var(--color-accent-red)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
};

export default DotPattern;
