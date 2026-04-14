type ProjectDescProps = {
  text: string;
  className?: string;
};

const ProjectDesc = ({ text, className }: ProjectDescProps) => {
  return (
    <p
      className={`text-text tracking-wider max-w-60 mx-auto break-words whitespace-normal leading-7 text-left mt-4 bg-section-title-bg shadow-lg rounded-xl text-sm p-4 phone-sm:max-w-[18.5rem] phone-md:max-w-80 phone-lg:max-w-[23rem] tablet-sm:max-w-[27.5rem] tablet-sm:text-base tablet-md:max-w-[32.5rem] tablet-md:mx-auto tablet-md:translate-x-0 tablet-lg:max-w-[36.5rem] desktop-sm:text-sm desktop-sm:max-w-[23rem]  desktop-sm:mr-[4.75rem] desktop-sm:-mt-8 desktop-md:col-span-2 desktop-md:text-base desktop-md:p-6 desktop-xl:leading-10 desktop-xl:text-xl desktop-xl:max-w-[57.5rem] desktop-xl:-translate-x-[20%] ${
        className ?? ""
      }`}
    >
      {text}
    </p>
  );
};

export default ProjectDesc;
