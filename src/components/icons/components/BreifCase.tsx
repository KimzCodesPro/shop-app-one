import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const { HS, VS } = scalingMethods;

function BreifCase({ size = 24, color, style }: IconProps) {
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
      <Path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <Path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <Path d="M12 12l0 .01" />
      <Path d="M3 13a20 20 0 0 0 18 0" />
    </Svg>
  );
}

export default BreifCase;
