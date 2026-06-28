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
    <Path d="M15 6l-6 6l6 6" />
  </Svg>
);
export default SVGComponent;
