import type { ComponentType, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

const Icon = ({
  title,
  className = "",
  as: Component,
  ...restProps
}: IconProps & { as?: ComponentType<SVGProps<SVGSVGElement>> }) => {
  if (!Component) {
    return null;
  }
  const combinedClassName = `${className}`.trim();

  return (
    <Component
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={`${combinedClassName} flex shrink-0 items-center justify-center`}
      {...restProps}
    />
  );
};

export default Icon;
