import { useId } from "react";

const DotPattern = () => {
  const uid = useId();
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
            id={`${uid}-dot`}
            patternUnits="userSpaceOnUse"
            width={20}
            height={20}
          >
            <circle cx="3" cy="3" fill="var(--color-accent-red)" r={3} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uid}-dot)`} />
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
            id={`${uid}-dot-xl`}
            patternUnits="userSpaceOnUse"
            width={16}
            height={16}
          >
            <circle cx="3" cy="3" fill="var(--color-accent-red)" r={3} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${uid}-dot-xl)`} />
      </svg>
    </div>
  );
};

export default DotPattern;
