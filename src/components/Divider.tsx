import { type CSSProperties } from "react";

export type CssLength =
  | number
  | `${number}px`
  | `${number}rem`
  | `${number}vh`
  | `var(--${string})`;

interface DividerProps {
  widthPx: CssLength;
  heightPx: CssLength;
  color: "grey-3" | "grey-2";
  topPx?: CssLength;
  bottomPx?: CssLength;
  leftPx?: CssLength;
  className?: string;
}

const Divider = ({
  widthPx,
  heightPx,
  color,
  topPx,
  bottomPx,
  leftPx = 0,
  className = "",
}: DividerProps) => {
  const colorMap: Record<DividerProps["color"], string> = {
    "grey-3": "var(--color-grey-3)",
    "grey-2": "var(--color-grey-2)",
  };

  const toCssLength = (value: CssLength | undefined) => {
    if (value === undefined) return undefined;
    return typeof value === "number" ? `${value}px` : value;
  };

  const style: CSSProperties = {
    width: toCssLength(widthPx as CssLength),
    height: toCssLength(heightPx),
    backgroundColor: colorMap[color],
    top: toCssLength(topPx),
    bottom: toCssLength(bottomPx),
    left: toCssLength(leftPx ?? 0),
  };

  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
};
export default Divider;
