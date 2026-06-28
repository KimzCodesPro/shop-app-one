import { StyleProp, ViewStyle } from "react-native";
import iconMapper from "./components/iconMapper";

export type IconName = keyof typeof iconMapper;

export type IconProps = {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};
