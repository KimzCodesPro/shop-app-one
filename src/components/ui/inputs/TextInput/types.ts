import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type TextInputType = "password" | "text";

export type TextInputProps = {
  type?: TextInputType;
  placeholder: string;
  label: string;
  errorMessage?: string;
  value: string;
  onChange: (text: string) => void;
  onClearInput?: () => void;
  icon: IconName;
  style?: StyleProp<ViewStyle>;
};

export type StatusType = "default" | "error" | "focused" | "filled";
