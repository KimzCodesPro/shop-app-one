import { StyleProp, ViewStyle } from "react-native";

export type SwitchProps = {
  isActive: boolean;
  onChange: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};
