import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS } = scalingMethods;

function ChevronLeft({ size = 24, color, style }: IconBase) {
  return (
    <Svg
      width={HS(size)}
      height={HS(size)}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M15 6l-6 6l6 6" />
    </Svg>
  );
}

export default ChevronLeft;
