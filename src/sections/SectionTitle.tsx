import React from "react";
import { Circle } from "../components/Circle";

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
  theme = "light",
  className = "",
}) => {
  const titleColor =
    theme === "dark" ? "text-grey-medium" : "text-grey-extra-dark";
  const partColor =
    theme === "dark" ? "text-grey-medium" : "text-grey-extra-dark";

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <span className={`text-xs uppercase tracking-[0.2em] ${partColor}`}>
          {partLabel}
        </span>

        <div className="flex items-center gap-1">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <Circle
              key={i}
              sizes={{ mobile: 0.5, tablet: 0.8, desktop: 1.2 }}
            />
          ))}
        </div>
      </div>
      <h2
        className={`mt-2 font-semibold tracking-[0.35em] ${titleColor}
                    text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px]`}
      >
        {title}
      </h2>
    </div>
  );
};
