const skillGroups = [
  {
    label: "Languages",
    skills: ["HTML5", "CSS3 / SCSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Frameworks & Tools",
    skills: ["React 19", "Tailwind CSS 4", "Vite", "Git / GitHub"],
  },
  {
    label: "Other",
    skills: ["Figma", "Responsive Design", "Accessibility (WCAG)", "REST APIs"],
  },
];
const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative ml-3 tablet-sm:ml-9 desktop-sm:ml-0 mb-4 tablet-sm:mt-8 tablet-md:mb-6 desktop-sm:mt-42 desktop-sm:max-w-110 desktop-xl:max-w-120"
    >
      <div className="leading-6.5 phone-lg:leading-7.5 tablet-sm:leading-8.5 desktop-sm:w-max desktop-sm:mx-auto desktop-sm:flex desktop-sm:flex-col desktop-sm:items-start">
        <p
          className="text-text text-(length:--font-page-number) self-start desktop-md:text-[1.75rem] desktop-2xl:text-[2.5rem]"
          aria-hidden="true"
        >
          02
        </p>
        <h3
          id="skills-heading"
          className="text-[2.75rem] text-grey-2 font-medium desktop-sm:text-5xl desktop-sm:text-left desktop-2xl:text-7xl "
        >
          MY SKILLS
        </h3>
      </div>
      <div
        className="flex flex-col gap-4 phone-lg:gap-y-6 desktop-sm:gap-y-10 mt-4 tablet-sm:mt-5 border-l-2 desktop-sm:border-none desktop-sm:p-0 desktop-sm:mx-auto border-grey-2 pl-3"
        style={{ borderLeftWidth: "var(--hero-div-w)" }}
      >
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h4 className="mb-2 text-base font-bold uppercase tracking-widest text-accent-red desktop-sm:text-center tablet-md:text-xl desktop-lg:text-2xl">
              {group.label}
            </h4>
            <ul
              className="flex flex-wrap gap-2 desktop-sm:justify-center"
              aria-label={group.label}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-grey-2 px-3 py-1 text-xs text-text phone-sm:text-sm tablet-md:text-lg desktop-lg:text-xl desktop-sm:px-6 [@media(min-width:1920px)_and_(min-height:1440px)]:text-2xl"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
