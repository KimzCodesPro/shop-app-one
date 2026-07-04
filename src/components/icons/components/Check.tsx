import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const { HS, VS } = scalingMethods;
const Check = ({ size = 24, color = "black", style }: IconProps) => (
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
    <Path d="M5 12l5 5l10 -10" />
  </Svg>
);
export default Check;
