import { useState, useEffect } from "react";

type ProjectScreenProps = {
  title: string;
  description: string;
  technologies: string[];
  images: {
    thumbnail: string;
    full: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }[];
  links?: {
    live?: string;
  };
  pageNumber?: string | number;
};

const ProjectScreen = (props: ProjectScreenProps) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2  desktop-sm:items-start">
        <div className="space-y-4">
          <h3 className="sr-only">{props.title}</h3>
          <p className="sr-only">{props.description}</p>

          <div className="flex items-center ml-3 text-accent-red text-base font-semibold">
            {props.links?.live && (
              <a
                href={props.links.live}
                className="inline-flex items-center gap-2 "
              >
                <span>Live Demo</span>
                <img
                  src="/external-link-icon.svg"
                  className="w-7 h-7 -mt-1 inline-block"
                  alt="Open live demo (opens in new tab)"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-text phone-sm:text-xl tablet-sm:text-2xl">
          {props.pageNumber}
        </p>
        <div className="grid grid-cols-2 gap-4 ml-6 ">
          {props.images.map((img, index) => (
            <img
              key={`${img.thumbnail}-${index}`}
              src={img.thumbnail}
              alt={img.alt}
              width={img.width}
              height={img.height}
              onClick={() => setOpenImage(img.full)}
              loading="lazy"
              decoding="async"
              className={`... ${img.className ?? ""} transition-transform rounded-lg duration-300 ease-out hover:scale-105 cursor-zoom-in`}
            />
          ))}
        </div>
        <p className="text-center text-base bg-section-title w-72 p-2 mx-auto rounded-xl text-accent-red font-semibold tracking-wide">
          {props.technologies.join(", ")}
        </p>
      </div>

      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={openImage}
            alt="Project full screen"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectScreen;
