import React from "react";
import { Circle } from "../components/Circle";
import { Divider } from "../components/Divider";

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
    <div className="section-vh-50 flex flex-col justify-center relative ml-3">
      <Divider
        widthPx={2}
        heightPx={88}
        leftPx={0}
        color="grey-medium"
        topPx={8}
      />
      <div className="flex items-center gap-2">
        <span className={`text-base tracking-wide font-medium ${partColor}`}>
          {partLabel}
        </span>

        <div className="flex items-center gap-1">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <Circle key={i} sizes={{ mobile: 1, tablet: 0.8, desktop: 1.2 }} />
          ))}
        </div>
      </div>
      <h2
        className={`font-extrabold tracking-[0.2em] ${titleColor}
                    text-2xl`}
      >
        {title}
      </h2>
      <Divider
        widthPx={2}
        heightPx={108}
        leftPx={0}
        color="grey-medium"
        topPx={168}
      />
    </div>
  );
};
