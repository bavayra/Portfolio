import { useState, useRef, useCallback } from "react";
import Modal from "./Modal";

type ProjectScreenProps = {
  projectId: string;
  technologies: string[];
  imageClasses?: Record<number, string>;
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
  const handleClose = useCallback(() => setOpenImage(null), []);

  return (
    <>
      <div className="grid gap-4 tablet-md:grid-cols-1 desktop-sm:gap-0 desktop-sm:items-start">
        <div
          className={`grid grid-cols-2 gap-4 phone-md:gap-x-0 phone-lg:mt-6 tablet-md:ml-16 tablet-md:w-140 desktop-sm:ml-0 desktop-sm:gap-y-2 desktop-sm:w-100 desktop-md:gap-x-12 desktop-md:w-base desktop-md:gap-y-4 desktop-lg:w-3xl desktop-md:items-start desktop-xl:w-4xl ${props.className ?? ""}`}
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
                className={`${props.imageClasses?.[index] ?? ""} transition-transform rounded-lg duration-300 ease-out hover:scale-105`}
              />
            </button>
          ))}
        </div>
        <p className="text-center text-sm bg-section-title w-64 p-2 mx-auto rounded-lg text-accent-red font-semibold my-2 tracking-wide phone-lg:text-base phone-lg:w-74 desktop-sm:hidden">
          {props.technologies.join(", ")}
        </p>
      </div>

      {openImage && (
        <Modal
          isOpen
          onClose={handleClose}
          ariaLabel="Project screenshot"
          initialFocusRef={closeBtnRef as React.RefObject<HTMLElement>}
          panelClassName="relative z-10 p-0 bg-transparent flex items-center justify-center"
        >
          <div className="relative">
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 rounded-full border border-grey-3 bg-bg/90 px-3 py-1 text-sm text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red focus-visible:ring-offset-1 focus-visible:ring-offset-black/40"
              aria-label="Close screenshot"
            >
              <span aria-hidden="true">✕</span>
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
