import { IconName } from "@/components/icons";
import { FieldProps } from "../shared/sharedTypes";

type TextInputTypePros =
  | { type?: "text"; iconName: IconName; clearInput?: () => void }
  | { type: "password"; iconName?: never; clearInput?: never };

export type TextInputProps = {
  onChangeText?: (text: string) => void;
} & TextInputTypePros &
  FieldProps;
