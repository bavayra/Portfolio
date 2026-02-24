import React from "react";

interface DividerProps {
  widthPx: 2 | 3 | number;
  heightPx: number;
  color: "grey-3" | "grey-2";
  topPx?: number;
  bottomPx?: number;
  leftPx?: number;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  widthPx,
  heightPx,
  color,
  topPx,
  bottomPx,
  leftPx = 0,
  className = "",
}) => {
  const colorMap: Record<DividerProps["color"], string> = {
    "grey-3": "var(--color-grey-3)",
    "grey-2": "var(--color-grey-2)",
  };

  const style: React.CSSProperties = {
    width: `${widthPx}px`,
    height: `${heightPx}px`,
    backgroundColor: colorMap[color],
    top: topPx !== undefined ? `${topPx}px` : undefined,
    bottom: bottomPx !== undefined ? `${bottomPx}px` : undefined,
    left: `${leftPx}px`,
  };

  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};
