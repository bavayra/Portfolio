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
      className="relative ml-3 tablet-sm:ml-12 desktop-sm:ml-0 mb-4"
    >
      <div className="leading-6.5 phone-lg:leading-7.5">
        <p
          className="text-text text-(length:--font-page-number) desktop-sm:text-right
           desktop-sm:mr-10"
          aria-hidden="true"
        >
          02
        </p>
        <h3
          id="skills-heading"
          className="text-[2.2rem] text-grey-2 font-medium tablet-md:my-2 desktop-sm:text-4xl desktop-sm:text-right desktop-sm:mr-10 desktop-xl:text-5xl "
        >
          MY SKILLS
        </h3>
      </div>
      <div className="flex flex-col gap-4 phone-lg:gap-y-6 mt-4 tablet-sm:mt-10 border-l-2 border-grey-2 pl-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h4 className="mb-2 text-base font-bold uppercase tracking-widest text-accent-red desktop-sm:text-right desktop-sm:mr-10">
              {group.label}
            </h4>
            <ul
              className="flex flex-wrap gap-2 desktop-sm:justify-end desktop-sm:mr-10"
              aria-label={group.label}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-grey-2 px-3 py-1 text-xs text-text phone-sm:text-sm desktop-xl:text-base"
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
