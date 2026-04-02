type ProjectDescProps = {
  text: string;
  className?: string;
};

const ProjectDesc = ({ text, className }: ProjectDescProps) => {
  return (
    <p
      className={`text-text phone-lg:max-w-92 tracking-normal max-w-60 phone-sm:text-sm phone-md:max-w-80  mx-auto wrap-break-words whitespace-normal phone-sm:max-w-74 leading-7 text-left desktop-sm:text-sm mt-4 desktop-sm:max-w-92 tablet-sm:max-w-110 bg-section-title-bg tablet-sm:text-base p-4 tablet-lg:max-w-146  desktop-sm:mr-19 desktop-sm:-mt-8 shadow-lg rounded-xl text-sm tablet-md:max-w-130 desktop-xl:leading-10 desktop-xl:text-xl desktop-xl:max-w-230 desktop-md:col-span-2 tablet-md:mx-auto tablet-md:translate-x-0 desktop-xl:-translate-x-[20%] tablet-md:text-center ${
        className ?? ""
      }`}
    >
      {text}
    </p>
  );
};

export default ProjectDesc;
