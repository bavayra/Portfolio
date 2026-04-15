import { type CSSProperties } from "react";

interface CircleProps {
  className?: string;
  topRem?: number;
  leftRem?: number;
  rightRem?: number;
  style?: CSSProperties;
}

const Circle = ({
  className = "",
  topRem,
  leftRem,
  rightRem,
  style: styleProp,
}: CircleProps) => {
  const positionStyle: CSSProperties = {
    position:
      topRem !== undefined || leftRem !== undefined || rightRem !== undefined
        ? "absolute"
        : "relative",
    top: topRem !== undefined ? `${topRem}rem` : undefined,
    left: leftRem !== undefined ? `${leftRem}rem` : undefined,
    right: rightRem !== undefined ? `${rightRem}rem` : undefined,
    pointerEvents: "none",
    ...styleProp,
  };

  return (
    <span
      className={`inline-block rounded-full bg-accent-red ${className}`}
      style={positionStyle}
      aria-hidden="true"
    />
  );
};

export default Circle;
