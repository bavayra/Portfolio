type ProjectDescProps = {
  text: string;
  className?: string;
};

const ProjectDesc = ({ text, className }: ProjectDescProps) => {
  return (
    <p
      className={`text-text phone-lg:max-w-92 tracking-wide max-w-60 phone-sm:text-sm phone-md:text-base phone-md:max-w-80  mx-auto wrap-break-words whitespace-normal phone-sm:max-w-72 leading-loose text-center mt-4  tablet-sm:max-w-110 bg-section-title-bg tablet-sm:text-base p-4 tablet-lg:max-w-146 tablet-lg:text-lg rounded-xl text-sm tablet-md:max-w-130 ${
        className ?? ""
      }`}
    >
      {text}
    </p>
  );
};

export default ProjectDesc;
