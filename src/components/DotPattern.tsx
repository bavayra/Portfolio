const DotPattern = () => {
  return (
    <div className="absolute bottom-0 desktop-sm:translate-x-0.5 inset-x-0 w-screen left-1/2 -translate-x-1/2 tablet-sm:translate-y-[12%] tablet-md:translate-y-[24%]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        className="tablet-sm:pl-8 w-full h-full pl-5 block"
        id="dot-pattern-svg"
      >
        <defs>
          <pattern
            id="dot-pattern"
            patternUnits="userSpaceOnUse"
            width={20}
            height={20}
          >
            <circle
              cx="3"
              cy="3"
              fill="var(--color-accent-red)"
              id="dot"
              r={3}
            />
          </pattern>
          <pattern
            id="dot-pattern-lg"
            width={12}
            height={12}
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r={2} fill="var(--color-accent-red)" />
          </pattern>
        </defs>
        <rect
          id="dot-pattern-rect"
          width="100%"
          height="100%"
          fill="url(#dot-pattern)"
        />
      </svg>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 320 320"
        className="w-full h-full block desktop-lg:w-[calc(100%+48px)]"
        id="dot-pattern-svg-xl"
      >
        <defs>
          <pattern
            id="dot-pattern-xl"
            patternUnits="userSpaceOnUse"
            width={16}
            height={16}
          >
            <circle
              cx="3"
              cy="3"
              fill="var(--color-accent-red)"
              id="dot-xl"
              r={3}
            />
          </pattern>
        </defs>
        <rect
          id="dot-pattern-rect-xl"
          width="100%"
          height="100%"
          fill="url(#dot-pattern-xl)"
        />
      </svg>
    </div>
  );
};

export default DotPattern;
