import React from "react";
import { Circle } from "../components/Circle";
import { Divider } from "../components/Divider";
import { useInViewOnce } from "../hooks/useInViewOnce";

type Theme = "light" | "dark";

interface SectionTitleProps {
  title: string;
  partLabel?: string;
  dotsCount?: 1 | 2 | 3;
  theme?: Theme;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  partLabel = "Part",
  dotsCount = 1,
}) => {
  const titleColor = "text-section-title";
  const partColor = "text-section-title";
  const { ref, inViewOnce } = useInViewOnce<HTMLHeadingElement>({
    threshold: 0.1,
  });

  return (
    <div className="section-vh-50 flex flex-col justify-center relative ml-3">
      <Divider
        widthPx={2}
        heightPx="var(--title-divider-h-base)"
        leftPx={0}
        color="grey-2"
        topPx={16}
      />
      <div className="flex items-center gap-2">
        <span className={`text-base tracking-wide font-medium ${partColor}`}>
          {partLabel}
        </span>

        {inViewOnce && (
          <>
            {Array.from({ length: dotsCount }).map((_, index) => (
              <Circle
                key={`dot-${index}`}
                className="circle-drop"
                sizes={{ mobile: 1, tablet: 0.8, desktop: 1.2 }}
                style={{ animationDelay: `${index * 0.6}s` }}
              />
            ))}
          </>
        )}
      </div>

      <h2
        ref={ref}
        className={`font-extrabold tracking-[0.2em] ${titleColor} text-2xl`}
      >
        {title}
      </h2>

      <Divider
        widthPx={2}
        heightPx="var(--title-divider-h-base)"
        leftPx={0}
        color="grey-2"
        topPx="var(--title-divider-top-base)"
      />
    </div>
  );
};
