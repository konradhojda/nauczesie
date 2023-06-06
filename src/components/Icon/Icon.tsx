import * as React from "react";

import type { IconType } from "./IconType";
import { map } from "./map";

type IconProps = { name: IconType } & React.SVGProps<SVGSVGElement>;

export function Icon({ name: providedName, ...rest }: IconProps) {
  const name = map[providedName] || providedName;
  console.log(name);
  return (
    <svg width="1em" height="1em" {...rest}>
      <use xlinkHref={`./icons.svg#${name}`} />
    </svg>
  );
}
