import { IconName } from "@/components/icons";
import { StatusVariant } from "@/types";
import { StyleProp, ViewStyle } from "react-native";

export type IconBadgeProps = {
  iconName: IconName;
  variant: Exclude<StatusVariant, "secondary">;
  style?: StyleProp<ViewStyle>;
};
