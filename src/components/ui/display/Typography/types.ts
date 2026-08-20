import { Language, TypographyVariant } from "@/types";
import { StyleProp, TextProps, TextStyle } from "react-native";

type TextChildren = string | number | TextChildren[];
export type TypographyProps = {
  variant: TypographyVariant;
  children: TextChildren;
  style?: StyleProp<TextStyle>;
  color?: string;
  forceLanguage?: Language;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & Omit<TextProps, "children">;
