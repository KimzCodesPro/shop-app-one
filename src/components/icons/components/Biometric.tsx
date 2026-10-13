import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Biometric({ size = 24, color, style }: IconBase) {
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
      <Path d="M3 8 V5 a2 2 0 0 1 2 -2 H8" />
      <Path d="M16 3 H19 a2 2 0 0 1 2 2 V8" />
      <Path d="M3 16 V19 a2 2 0 0 0 2 2 H8" />
      <Path d="M16 21 H19 a2 2 0 0 0 2 -2 V16" />
      <Path d="M7 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
      <Path d="M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0 -5 0" />
    </Svg>
  );
}

export default Biometric;
