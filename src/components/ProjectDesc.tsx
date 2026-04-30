type ProjectDescProps = {
  text: string;
  className?: string;
};

const ProjectDesc = ({ text, className }: ProjectDescProps) => {
  return (
    <p
      className={`text-text max-w-[clamp(15rem,calc(1.24rem+68.8vw),36.5rem)] desktop-sm:max-w-92 desktop-xl:max-w-132 tracking-wider mx-auto wrap-break-word whitespace-normal leading-7 text-left mt-4 tablet-sm:mt-0 bg-section-title-bg shadow-lg rounded-xl p-4 tablet-md:translate-x-0 desktop-sm:mr-20 desktop-md:mr-0 desktop-md:-translate-x-[37%]   desktop-xl:-translate-x-[50%] desktop-xl:px-8 desktop-md:p-6 desktop-lg:-translate-x-[56%] desktop-xl:leading-8 desktop-xl:text-lg text-sm tablet-sm:text-base tablet-sm:p-6 desktop-sm:text-sm desktop-md:text-sm ${
        className ?? ""
      }`}
    >
      {text}
    </p>
  );
};

export default ProjectDesc;
