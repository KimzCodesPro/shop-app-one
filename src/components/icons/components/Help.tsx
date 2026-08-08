import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Help({ size = 24, color, style }: IconBase) {
  return (
    <Svg
      width={HS(size)}
      height={VS(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M8 10.5h.01" />
      <Path d="M12 10.5h.01" />
      <Path d="M16 10.5h.01" />
      <Path d="M9 17.5h6l4 4v-4h2a2 2 0 0 0 2 -2v-9a2 2 0 0 0 -2 -2h-16a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h2v4z" />
    </Svg>
  );
}

export default Help;
