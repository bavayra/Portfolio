import React from "react";

interface CircleProps {
  className?: string;
  topRem?: number;
  leftRem?: number;
  rightRem?: number;
  style?: React.CSSProperties;
}

const Circle: React.FC<CircleProps> = ({
  className = "",
  topRem,
  leftRem,
  rightRem,
  style: styleProp,
}) => {
  const positionStyle: React.CSSProperties = {
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
