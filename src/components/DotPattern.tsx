const DotPattern = () => {
  return (
    <div className="absolute bottom-0 right-0 w-full pl-4">
      <svg width="100%" height="100%" viewBox="0 0 200 200">
        <defs>
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="3" fill="#991b1b" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
    </div>
  );
};

export default DotPattern;
