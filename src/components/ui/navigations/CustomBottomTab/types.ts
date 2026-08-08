import { IconName } from "@/components/icons";
import { TabTriggerSlotProps } from "expo-router/ui";

export type CustomBottomTabButtonProps = TabTriggerSlotProps & {
  iconName: IconName;
  label: string;
  badge?: number;
};
