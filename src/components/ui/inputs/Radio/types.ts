import { StyleProp, ViewStyle } from "react-native";

export type RadioProps = {
  isActive: boolean;
  onChange: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
