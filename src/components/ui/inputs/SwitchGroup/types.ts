import { StyleProp, ViewStyle } from "react-native";

export type SwitchGroupOption = {
  label: string;
  value: string;
  enabled: boolean;
  disabled?: boolean;
};
export type SwitchGroupProps = {
  options: SwitchGroupOption[];
  onValueChange: (value: string) => void;
  style?: StyleProp<ViewStyle>;
};
