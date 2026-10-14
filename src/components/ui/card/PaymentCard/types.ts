import { StatusVariant } from "@/types";
import { StyleProp, ViewStyle } from "react-native";

export type PaymentCardProps = {
  cardNumber: string;
  expiryDate: string;
  cardType: string;
  variant?: Exclude<StatusVariant, "secondary">;
  isDefault?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
