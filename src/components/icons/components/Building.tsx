import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const { HS, VS } = scalingMethods;

function Building({ size = 24, color, style }: IconProps) {
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
      <Path d="M3 21l18 0" />
      <Path d="M9 8l1 0" />
      <Path d="M9 12l1 0" />
      <Path d="M9 16l1 0" />
      <Path d="M14 8l1 0" />
      <Path d="M14 12l1 0" />
      <Path d="M14 16l1 0" />
      <Path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
    </Svg>
  );
}

export default Building;
