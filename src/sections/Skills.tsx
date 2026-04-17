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
      className="relative py-8 ml-3 tablet-sm:ml-12 desktop-sm:ml-0"
    >
      <p
        className="text-text text-[length:var(--font-page-number)] desktop-sm:flex desktop-sm:justify-end desktop-sm:mr-10"
        aria-hidden="true"
      >
        02
      </p>
      <h3
        id="skills-heading"
        className="text-[length:var(--font-section-label)] text-grey-2 font-medium tablet-md:my-2 desktop-sm:text-4xl desktop-sm:flex desktop-sm:justify-end desktop-sm:mr-10 desktop-xl:text-5xl "
      >
        MY SKILLS
      </h3>
      <div className="mt-6 flex flex-col gap-6 phone-sm:mt-8 tablet-sm:mt-10 border-l-2 border-grey-2 pl-3">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-red phone-sm:text-sm desktop-sm:text-right desktop-sm:mr-10">
              {group.label}
            </p>
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
