import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function BoxOff({ size = 24, color, style }: IconBase) {
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
      <Path d="M3 10a2 2 0 0 1 .98 -1.7l8 -4.6a2 2 0 0 1 2 0l3 1.72" />
      <Path d="M21 10v8a2 2 0 0 1 -1 1.7l-8 4.6a2 2 0 0 1 -2 0l-7 -4" />
      <Path d="M12 12v9" />
    </Svg>
  );
}

export default BoxOff;
