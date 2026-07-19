import { StyleProp, ViewStyle } from "react-native";

export type AddressCardProps = {
  city: string;
  address: string;
  type: "home" | "office" | "apartment" | "other";
  isSelected?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
