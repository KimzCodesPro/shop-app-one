import { StatusVariant } from "@/src/types";
import { StyleProp, ViewStyle } from "react-native";

export type PaymentCardProps = {
  cardNumber: string;
  expiryDate: string;
  cardType: string;
  variant: StatusVariant;
  isDefault?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
