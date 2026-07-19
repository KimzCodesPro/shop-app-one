import { scalingMethods } from "@/utils";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../types";
const { HS, VS } = scalingMethods;

function Home({ size = 24, color, style }: IconProps) {
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
      <Path d="M5 12l-2 0l9 -9l9 9l-2 0" />
      <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
      <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
    </Svg>
  );
}

export default Home;
