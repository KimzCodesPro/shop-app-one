import { IconName } from "@/components/icons/types";
import { StatusVariant } from "@/types/theme";
import type { StyleProp, ViewStyle } from "react-native";

export type StatusHaloProps = {
  variant?: StatusVariant;
  icon: IconName;
  style?: StyleProp<ViewStyle>;
};
