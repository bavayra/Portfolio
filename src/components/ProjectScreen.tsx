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
  }[];
  links?: {
    github?: string;
    live?: string;
  };
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
      <section>
        <div className="grid gap-6 desktop-sm:grid-cols-2 desktop-sm:items-start">
          <div className="space-y-4">
            <p className="text-sm text-grey-2">04</p>
            <h3 className="text-2xl font-semibold text-grey-2">
              {props.title}
            </h3>
            <p className="text-sm text-text leading-relaxed">
              {props.description}
            </p>

            <div className="flex items-center gap-3">
              {props.links?.github && <a href={props.links.github}>GitHub</a>}
              {props.links?.live && <a href={props.links.live}>Live</a>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
                className={`transition-transform duration-300 ease-out hover:scale-105 cursor-zoom-in ${
                  index % 3 === 0 ? "col-span-2" : "col-span-1"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

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
