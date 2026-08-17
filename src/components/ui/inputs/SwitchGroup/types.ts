import { StyleProp, ViewStyle } from "react-native";

export type SwitchGroupOption = {
  label: string;
  value: string;
  enabled: boolean;
  disabled?: boolean;
};
// `enabled` is the state the user is asking for, not the current one.
export type SwitchGroupChange = {
  value: string;
  enabled: boolean;
};

export type SwitchGroupProps = {
  options: SwitchGroupOption[];
  onValueChange: (change: SwitchGroupChange) => void;
  style?: StyleProp<ViewStyle>;
};
