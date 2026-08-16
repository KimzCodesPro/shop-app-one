import { StyleProp, ViewStyle } from "react-native";

export type RadioProps = {
  isSelected: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
