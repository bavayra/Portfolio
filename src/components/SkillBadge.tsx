import React from "react";

type Props = {
  percent: number;
  size?: number;
  stroke?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
};

export const CircleStatic: React.FC<Props> = ({
  percent,
  size = 80,
  stroke = 8,
  color = "#991d1d",
  className = "",
  ariaLabel,
}) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.max(0, Math.min(100, percent)) / 100);

  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      role="img"
      aria-label={ariaLabel ?? `Progress ${percent}%`}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ transform: "rotate(-90deg)", display: "block" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#8c8c8c"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          transform={`rotate(90 ${size / 2} ${size / 2})`}
          style={{ fontSize: "0.65rem", fill: "#646464" }}
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
};

export default CircleStatic;
