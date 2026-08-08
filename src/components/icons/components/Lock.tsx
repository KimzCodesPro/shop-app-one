import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Lock({ size = 24, color, style }: IconBase) {
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
      <Path d="M5 13a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6z" />
      <Path d="M11 16a1 1 0 102 0 1 1 0 00-2 0M8 11V7a4 4 0 118 0v4" />
    </Svg>
  );
}

export default Lock;
