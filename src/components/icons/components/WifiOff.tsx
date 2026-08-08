import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function WifiOff({ size = 24, color, style }: IconBase) {
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
      <Path d="M3 8a16 16 0 0 1 4.5 -2.5" />
      <Path d="M13 4.2a15.6 15.6 0 0 1 8 3.7" />
      <Path d="M6 11a10 10 0 0 1 3 -1.7" />
      <Path d="M14 9.7a10 10 0 0 1 4 2.3" />
      <Path d="M9 14a4 4 0 0 1 6 0" />
    </Svg>
  );
}

export default WifiOff;
