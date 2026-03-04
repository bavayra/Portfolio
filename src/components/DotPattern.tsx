const DotPattern = () => {
  return (
    <div className="absolute bottom-0 inset-x-0 w-screen left-1/2 -translate-x-1/2 tablet-sm:translate-y-[12%] tablet-md:translate-y-[24%]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        className="tablet-sm:pl-8  w-full h-full pl-5 block"
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
