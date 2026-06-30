import { StyleProp, ViewStyle } from "react-native";
import { IconName } from "../../../icons";

export type VariantType = "primary" | "link" | "chip" | "ghost" | "danger";

export type SizeType = "sm" | "lg";

export type ButtonProps = {
  disabled?: boolean;
  size?: SizeType;
  title: string;
  variant?: VariantType;
  icon?: IconName;
  onPress: () => void;
  loading?: { indicator: boolean; text?: string };
  style?: StyleProp<ViewStyle>;
};
