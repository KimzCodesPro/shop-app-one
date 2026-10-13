import { IconName } from "@/components/icons";
import { FieldProps } from "../shared/sharedTypes";

type TextInputTypePros =
  | { type?: "text"; icon: IconName; clearInput?: () => void }
  | { type: "password"; icon?: never; clearInput?: never };

export type TextInputProps = {
  onChangeText?: (text: string) => void;
} & TextInputTypePros &
  FieldProps;
