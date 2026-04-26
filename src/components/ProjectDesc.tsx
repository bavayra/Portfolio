type ProjectDescProps = {
  text: string;
  className?: string;
};

const ProjectDesc = ({ text, className }: ProjectDescProps) => {
  return (
    <p
      className={`text-text max-w-[clamp(15rem,calc(1.24rem+68.8vw),36.5rem)] desktop-sm:max-w-92 desktop-xl:max-w-230 tracking-wider mx-auto wrap-break-word whitespace-normal leading-7 text-left mt-4 bg-section-title-bg shadow-lg rounded-xl p-4 tablet-md:translate-x-0 desktop-sm:mr-20 desktop-sm:mt-0 desktop-md:col-span-2 desktop-md:p-6 desktop-xl:leading-10 desktop-xl:text-xl desktop-xl:-translate-x-[20%] text-sm tablet-sm:text-base tablet-sm:p-6 desktop-sm:text-sm desktop-md:text-base ${
        className ?? ""
      }`}
    >
      {text}
    </p>
  );
};

export default ProjectDesc;
