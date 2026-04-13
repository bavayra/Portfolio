import { useState, useRef } from "react";
import Modal from "./Modal";

const PROJECT_IMAGE_CLASSES: Record<string, Record<number, string>> = {
  "dog-shelter": {
    0: "mx-auto phone-md:mt-3 phone-md:w-38 phone-lg:-mt-5 phone-lg:w-44 tablet-md:w-60 desktop-sm:mt-4 desktop-sm:w-40 desktop-md:-mt-2 desktop-xl:w-52",
    1: "-mt-4 mx-auto phone-md:-mt-6 phone-md:w-36 phone-lg:-mt-14 phone-lg:w-44 tablet-sm:-mt-14 tablet-sm:w-52 tablet-md:w-60 desktop-sm:-mt-6 desktop-sm:w-40 desktop-md:mt-8 desktop-xl:w-52",
    2: "translate-y-8 mx-auto phone-md:w-38 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:w-40 desktop-md:translate-y-full desktop-xl:w-52",
    3: "-mt-18 mx-auto phone-md:-mt-28 phone-md:w-36 phone-lg:-mt-26 phone-lg:w-44 tablet-sm:-mt-28 tablet-sm:w-52 tablet-md:-mt-32 tablet-md:w-60 desktop-sm:-mt-24 desktop-sm:w-40 desktop-xl:w-52",
  },
  "weather-app": {
    0: "mx-auto phone-md:mt-2 phone-md:w-36 phone-lg:-mt-5 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:mt-4 desktop-sm:w-40 desktop-xl:w-52",
    1: "-mt-6 mx-auto phone-md:w-36 phone-lg:-mt-14 phone-lg:w-44 tablet-sm:w-52 tablet-md:w-60 desktop-sm:-mt-6 desktop-sm:w-40 desktop-xl:w-52",
    2: "mx-auto phone-md:w-34 phone-lg:w-44 tablet-sm:mt-2 tablet-sm:w-52 tablet-md:w-60 desktop-sm:mt-2 desktop-sm:w-40 desktop-xl:w-52",
    3: "mx-auto phone-md:-mt-3 phone-md:w-36 phone-lg:-mt-4 phone-lg:w-44 tablet-sm:-mt-2 tablet-sm:w-52 tablet-md:w-60 desktop-sm:-mt-4 desktop-sm:w-40 desktop-xl:w-52",
  },
  "portfolio-project": {
    0: "mx-auto w-34 phone-md:w-38 phone-lg:w-44 tablet-sm:w-54 tablet-md:-mt-5 tablet-md:w-60 border-2 border-grey-2 desktop-sm:mt-4 desktop-sm:w-40 desktop-xl:w-52",
    1: "-mt-4 mx-auto w-34 phone-md:-mt-8 phone-md:w-38 phone-lg:-mt-12 phone-lg:w-44 tablet-sm:-mt-14 tablet-sm:w-54 tablet-md:w-60 border-2 border-grey-2 desktop-sm:-mt-6 desktop-sm:w-40 desktop-lg:-mt-9 desktop-md:-mt-4 desktop-xl:w-52",
    2: "-mt-14 mx-auto w-30 phone-md:-mt-11 phone-md:w-38 phone-lg:w-44 tablet-sm:-mt-13 tablet-sm:w-54 tablet-md:-mt-22 tablet-md:w-60 border-2 border-grey-2 desktop-sm:-mt-9 desktop-sm:w-40 desktop-md:translate-y-2/3 desktop-xl:w-52",
    3: "mx-auto w-30 phone-md:w-38 phone-lg:w-44 tablet-sm:mt-3 tablet-sm:w-60 tablet-md:w-60 border-2 border-grey-2 desktop-sm:w-40 desktop-md:translate-y-[120%] desktop-xl:w-52",
  },
};

type ProjectScreenProps = {
  projectId: string;
  title: string;
  description: string;
  technologies: string[];
  images: {
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
  }[];
  className?: string;
};

const ProjectScreen = (props: ProjectScreenProps) => {
  const [openImage, setOpenImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const positionClasses = PROJECT_IMAGE_CLASSES[props.projectId] ?? {};

  return (
    <>
      <div className="grid gap-4 tablet-md:grid-cols-1 desktop-sm:gap-0 desktop-sm:items-start">
        <div className="space-y-4">
          <h3 className="sr-only">{props.title}</h3>
          <p className="sr-only">{props.description}</p>
        </div>
        <div
          className={`grid grid-cols-2 gap-4 phone-md:gap-x-0 phone-lg:mt-6 tablet-md:ml-16 tablet-md:w-[35rem] desktop-sm:ml-0 desktop-sm:gap-y-2 desktop-sm:w-[25rem] desktop-md:gap-x-6 desktop-md:grid-cols-4 desktop-md:-translate-x-1/5 desktop-md:w-2xl desktop-lg:w-3xl desktop-xl:w-4xl ${props.className ?? ""}`}
        >
          {props.images.map((img, index) => (
            <button
              key={img.thumbnail}
              type="button"
              onClick={() => setOpenImage({ src: img.full, alt: img.alt })}
              className="cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-2"
              aria-label={`View full screenshot: ${img.alt}`}
            >
              <img
                src={img.thumbnail}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className={`${positionClasses[index] ?? ""} transition-transform rounded-lg duration-300 ease-out hover:scale-105`}
              />
            </button>
          ))}
        </div>
        <p className="text-center text-xs bg-section-title w-60 p-2 mx-auto rounded-lg text-accent-red font-semibold my-2 tracking-wide phone-lg:text-sm phone-lg:w-[17.5rem] tablet-sm:text-base tablet-sm:w-[18.5rem] desktop-sm:hidden">
          {props.technologies.join(", ")}
        </p>
      </div>

      {openImage && (
        <Modal
          isOpen={!!openImage}
          onClose={() => setOpenImage(null)}
          ariaLabel="Project screenshot"
          initialFocusRef={closeBtnRef as React.RefObject<HTMLElement>}
          panelClassName="relative z-10 p-0 bg-transparent flex items-center justify-center"
        >
          <div className="relative">
            <button
              ref={closeBtnRef}
              onClick={() => setOpenImage(null)}
              className="absolute top-4 right-4 z-20 rounded-full border border-grey-3 bg-bg/90 px-3 py-1 text-sm text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-1 focus-visible:ring-offset-black/40"
              aria-label="Close screenshot"
            >
              X
            </button>

            <img
              src={openImage.src}
              alt={openImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default ProjectScreen;
