import { IconName } from "@/components/icons";
import { StatusVariant } from "@/src/types";
import { StyleProp, ViewStyle } from "react-native";

export type StatusBillVariant = "filled" | "outlined";

export type StatusBillProps = {
  iconName?: IconName;
  variant?: StatusBillVariant;
  label: string;
  color: StatusVariant;
  style?: StyleProp<ViewStyle>;
};
