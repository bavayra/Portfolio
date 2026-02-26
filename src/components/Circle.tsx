import React, { useEffect, useState } from "react";

type Sizes = {
  mobile: number;
  mobileLg: number;
  tablet: number;
  desktop: number;
};

interface CircleProps {
  sizes: Sizes;
  className?: string;
  topRem?: number;
  leftRem?: number;
  rightRem?: number;
  style?: React.CSSProperties;
}

const FIXED_COLOR = "var(--color-accent-red)";

export const Circle: React.FC<CircleProps> = ({
  sizes,
  className = "",
  topRem,
  leftRem,
  rightRem,
  style: styleProp,
}) => {
  const [sizeRem, setSizeRem] = useState<number>(sizes.desktop);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 412) setSizeRem(sizes.mobile);
      else if (w < 640) setSizeRem(sizes.mobileLg);
      else if (w < 1024) setSizeRem(sizes.tablet);
      else setSizeRem(sizes.desktop);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [sizes]);

  const style: React.CSSProperties = {
    width: `${sizeRem}rem`,
    height: `${sizeRem}rem`,
    backgroundColor: FIXED_COLOR,
    borderRadius: "50%",
    display: "inline-block",
    position:
      topRem !== undefined || leftRem !== undefined ? "absolute" : "relative",
    top: topRem !== undefined ? `${topRem}rem` : undefined,
    left: leftRem !== undefined ? `${leftRem}rem` : undefined,
    right: rightRem !== undefined ? `${rightRem}rem` : undefined,
    pointerEvents: "none",
    ...styleProp,
  };

  return <span className={className} style={style} aria-hidden="true" />;
};
