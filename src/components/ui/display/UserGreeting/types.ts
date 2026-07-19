import { StyleProp, ViewStyle } from "react-native";
import { Sizes } from "../Avatar/types";

export const avatarSizeMap: Record<"sm" | "lg", Exclude<Sizes, "lg">> = {
  sm: "sm",
  lg: "md",
};

export type UserGreetingProps = {
  size: keyof typeof avatarSizeMap;
  imgSrc: string;
  userName: string;
  meta: string;
  style?: StyleProp<ViewStyle>;
};
