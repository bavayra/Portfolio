import React from "react";
import { Circle } from "../components/Circle";
import { Divider } from "../components/Divider";
import { useInViewOnce } from "../hooks/useInViewOnce";

interface SectionTitleProps {
  title: string;
  partLabel?: string;
  dotsCount?: 1 | 2 | 3;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  partLabel = "Part",
  dotsCount = 1,
}) => {
  const partColor = "text-section-title";
  const { ref, inViewOnce } = useInViewOnce<HTMLHeadingElement>({
    threshold: 0.1,
  });

  return (
    <div className="section-vh flex flex-col relative ml-3 justify-center phone-md:pb-10 tablet-sm:ml-12 desktop-lg:ml-10">
      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--section-top-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--section-top-div-top)"
      />
      <div className="mb-4">
        <div className="flex items-center gap-2">
          <span className="text-base tracking-wide font-medium phone-sm:text-xl min-[390px]:text-2xl tablet-md:text-3xl desktop-lg:text-4xl text-section-title">
            {partLabel}
          </span>

          {inViewOnce && (
            <>
              {Array.from({ length: dotsCount }).map((_, index) => (
                <Circle
                  key={`dot-${index}`}
                  className="circle-drop"
                  sizes={{
                    mobile: 1,
                    mobileLg: 1.6,
                    tablet: 1.8,
                    desktop: 2,
                  }}
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
              ))}
            </>
          )}
        </div>

        <h2
          ref={ref}
          className="font-extrabold tracking-[0.2em] text-[length:var(--section-title-size)] tablet-sm:text-5xl tablet-md:text-6xl desktop-sm:text-7xl desktop-lg:text-8xl text-section-title"
        >
          {title}
        </h2>
      </div>

      <Divider
        widthPx="var(--hero-div-w)"
        heightPx="var(--section-bot-div-height)"
        leftPx={0}
        color="grey-2"
        topPx="var(--section-bot-div-top)"
      />
    </div>
  );
};
