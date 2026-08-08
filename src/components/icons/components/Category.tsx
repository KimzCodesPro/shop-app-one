import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconBase } from "../types";
const { HS, VS } = scalingMethods;

function Category({ size = 24, color, style }: IconBase) {
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
      <Path d="M4 4h6v6h-6z" />
      <Path d="M14 4h6v6h-6z" />
      <Path d="M4 14h6v6h-6z" />
      <Path d="M14 14h6v6h-6z" />
    </Svg>
  );
}

export default Category;
