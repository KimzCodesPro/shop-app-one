import { Theme } from "@/types";
import { ImageProps } from "expo-image";

export type ThemeOption = {
  label: string;
  value: Theme;
  image: ImageProps["source"];
  disabled?: boolean;
};

export type ThemeRadioGroupProps = {
  options: ThemeOption[];
  selectedValue: Theme;
  onValueChange: (value: Theme) => void;
};
