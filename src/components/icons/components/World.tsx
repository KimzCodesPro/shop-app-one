import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function World({ size = 24, color, style }: IconBase) {
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
      <Path d="M3.6 9h16.8" />
      <Path d="M3.6 15h16.8" />
      <Path d="M11.5 3a17 17 0 0 0 0 18" />
      <Path d="M12.5 3a17 17 0 0 1 0 18" />
    </Svg>
  );
}

export default World;
