import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type StatusType = "default" | "error" | "focused" | "filled";

export type FieldWrapperProps = {
  label?: string;
  fieldIconName: IconName;
  children: React.ReactNode;
  errorMessage?: string;
  currentStatus: StatusType;
  style?: StyleProp<ViewStyle>;
};

export type FieldProps = {
  label?: string;
  placeholder: string;
  errorMessage?: string;
  value: string;
  style?: StyleProp<ViewStyle>;
};

export type FieldErrorMessageProps = {
  errorMessage?: string;
};

export type FieldLabelProps = {
  label?: string;
};
