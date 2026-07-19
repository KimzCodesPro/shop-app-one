import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const { HS, VS } = scalingMethods;

function CreditCard({ size = 24, color, style }: IconProps) {
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
      <Path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <Path d="M3 10l18 0" />
      <Path d="M7 15l.01 0" />
      <Path d="M11 15l2 0" />
    </Svg>
  );
}

export default CreditCard;
