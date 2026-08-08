import { ColorValue, StyleProp, ViewStyle } from "react-native";
import iconMapper from "./components/iconMapper";

export type IconName = keyof typeof iconMapper;

export type IconBase = {
  size?: number;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export type IconProps = {
  name: IconName;
  flipOnRTL?: boolean;
} & IconBase;
