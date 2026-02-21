declare module "*.svg?component" {
  import type { ComponentType, SVGProps } from "react";
  const Component: ComponentType<SVGProps<SVGSVGElement>>;
  export default Component;
}
