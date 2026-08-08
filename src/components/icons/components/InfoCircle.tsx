import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function InfoCircle({ size = 24, color, style }: IconBase) {
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
      <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <Path d="M12 9h.01" />
      <Path d="M11 12h1v4h1" />
    </Svg>
  );
}

export default InfoCircle;
