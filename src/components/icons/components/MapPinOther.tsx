import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function MapPinOther({ size = 24, color, style }: IconBase) {
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
      <Path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      <Path d="M10.5 9a1.5 1.5 0 0 1 3 0c0 .8 -.5 1.2 -1 1.5c-.5 .3 -.5 .5 -.5 1" />
      <Path d="M12 13.5v.01" />
    </Svg>
  );
}

export default MapPinOther;
