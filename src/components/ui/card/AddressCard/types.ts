import { StyleProp, ViewStyle } from "react-native";

export type AddressTypes = "home" | "office" | "apartment" | "other";

export type AddressCardProps = {
  city: string;
  address: string;
  type: AddressTypes;
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
