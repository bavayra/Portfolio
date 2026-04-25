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
      className="relative ml-3 tablet-sm:ml-9 desktop-sm:ml-0 mb-4 tablet-md:mb-6"
    >
      <div className="leading-6.5 phone-lg:leading-7.5 tablet-sm:leading-8.5 tablet-md:leading-6.5">
        <p
          className="text-text text-(length:--font-page-number) desktop-sm:text-right
           desktop-sm:mr-10"
          aria-hidden="true"
        >
          02
        </p>
        <h3
          id="skills-heading"
          className="text-[2.75rem] text-grey-2 font-medium tablet-md:my-2 desktop-sm:text-4xl desktop-sm:text-right desktop-sm:mr-10 desktop-xl:text-5xl "
        >
          MY SKILLS
        </h3>
      </div>
      <div
        className="flex flex-col gap-4 phone-lg:gap-y-6 mt-4 tablet-sm:mt-5 border-l-2 border-grey-2 pl-3"
        style={{ borderLeftWidth: "var(--hero-div-w)" }}
      >
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h4 className="mb-2 text-base font-bold uppercase tracking-widest text-accent-red desktop-sm:text-right desktop-sm:mr-10 tablet-md:text-xl">
              {group.label}
            </h4>
            <ul
              className="flex flex-wrap gap-2 desktop-sm:justify-end desktop-sm:mr-10"
              aria-label={group.label}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-grey-2 px-3 py-1 text-xs text-text phone-sm:text-sm tablet-md:text-lg"
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
