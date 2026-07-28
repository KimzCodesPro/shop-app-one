import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";
import { FieldProps } from "../shared/sharedTypes";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  iconName: IconName;
  options: DropdownOption[];
  onSelect: (value: string) => void;
} & FieldProps;

export type DropdownListProps = {
  options: DropdownOption[];
  value: string;
  onSelect: (value: string) => void;
  style: StyleProp<ViewStyle>;
};
