import { IconName } from "@/components/icons";
import { StyleProp, ViewStyle } from "react-native";

export type IconButtonVariant = "primary";

export type IconButtonProps = {
  icon: IconName;
  onPress: () => void;
  variant?: IconButtonVariant;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
