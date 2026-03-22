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
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mapPageNumber = (value?: string | number) => {
    const str = typeof value === "number" ? String(value) : (value ?? "");
    if (!isDesktop) return str;
    if (str === "06") return "05";
    if (str === "08") return "06";
    return str;
  };

  const displayPageNumber = mapPageNumber(props.pageNumber);

  return (
    <>
      <div className="grid gap-4 tablet-md:grid-cols-1 desktop-sm:items-start">
        <div className="space-y-4">
          <h3 className="sr-only">{props.title}</h3>
          <p className="sr-only">{props.description}</p>
        </div>
        <p className="text-text phone-sm:text-xl tablet-sm:text-2xl desktop-sm:hidden">
          {displayPageNumber}
        </p>
        <div className="grid grid-cols-2 desktop-md:grid-cols-4 desktop-md:-translate-x-1/5 desktop-sm:ml-0 desktop-md:w-2xl desktop-sm:w-100 desktop-sm:gap-x-6 gap-4 phone-md:gap-x-0 ml-6 tablet-md:ml-16 tablet-md:w-140">
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
        <p className="text-center text-sm tablet-sm:text-base desktop-md:-translate-x-1/3 bg-section-title w-72 p-2 mx-auto rounded-lg text-accent-red font-semibold tracking-wide">
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
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ProjectScreen;
