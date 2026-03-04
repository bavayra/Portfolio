const DotPattern = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 w-screen left-1/2 -translate-x-1/2 tablet-sm:-bottom-20 tablet-md:-bottom-72">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        className="tablet-sm:scale-140 w-full h-full pl-5 block tablet-sm:origin-bottom-center "
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
