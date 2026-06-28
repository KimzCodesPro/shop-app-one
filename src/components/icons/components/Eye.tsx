import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const SVGComponent = ({ size = 24, color = "black", style }: IconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <Path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </Svg>
);
export default SVGComponent;
