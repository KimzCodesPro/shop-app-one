import { StyleProp, ViewStyle } from "react-native";

export type SwitchGroupOption = {
  label: string;
  value: string;
  isSelected: boolean;
  disabled?: boolean;
};
export type SwitchGroupProps = {
  options: SwitchGroupOption[];
  onValueChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};
