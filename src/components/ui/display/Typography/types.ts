import { TypographyVariant } from "@/types";
import { StyleProp, TextProps, TextStyle } from "react-native";

export type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & TextProps;
