import { IconName } from "@/components/icons";
import { StatusVariant } from "@/src/types";

export type StatusBillVariant = "filled" | "outlined";

export type StatusBillProps = {
  iconName?: IconName;
  variant?: StatusBillVariant;
  label: string;
  color: StatusVariant;
};
