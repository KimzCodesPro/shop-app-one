import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Layers({ size = 24, color, style }: IconBase) {
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
      <Path d="M12 4l-8 4l8 4l8 -4l-8 -4" />
      <Path d="M4 12l8 4l8 -4" />
      <Path d="M4 16l8 4l8 -4" />
    </Svg>
  );
}

export default Layers;
