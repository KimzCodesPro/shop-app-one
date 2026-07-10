import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

type FormInputPropsBase = {
  label?: string;
  placeHolder: string;
  errorMessage?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
};

type FormInputTypePros =
  | { type?: "text"; iconName: IconName; clearInput?: () => void }
  | { type: "password"; iconName?: never; clearInput?: never };

export type FormInputProps = FormInputPropsBase & FormInputTypePros;

export type StatusType = "default" | "error" | "focused" | "filled";
