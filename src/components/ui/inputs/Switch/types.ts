import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
