import { StyleProp, ViewStyle } from "react-native";

export type CheckBoxProps = {
  isSelected: boolean;
  disabled?: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
};
