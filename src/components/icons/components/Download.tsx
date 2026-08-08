import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Download({ size = 24, color, style }: IconBase) {
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
      <Path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
      <Path d="M7 11l5 5l5 -5" />
      <Path d="M12 4l0 12" />
    </Svg>
  );
}

export default Download;
