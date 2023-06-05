import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function MyIcon({
  name,
}: {
  name: FontAwesomeIconProps["icon"];
}) {
  return <FontAwesomeIcon icon={name} />;
}
