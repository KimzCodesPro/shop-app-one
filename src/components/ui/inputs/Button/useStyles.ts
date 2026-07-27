import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { SizeType, VariantType } from "./types";

const { HS, VS } = scalingMethods;

const useStyles = (
  variant: VariantType,
  size?: SizeType,
  disabled?: boolean,
) => {
  const colors = useTheme();

  const buttonHeight = size === "sm" ? VS(40) : VS(50);

  const buttonPaddingHorizontal = size === "sm" ? HS(16) : HS(24);

  const variantColors = {
    primary: {
      background: colors.primary.base,
      typography: colors.foreground.contrast,
      border: colors.primary.base,
    },
    chip: {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.primary.base,
    },
    link: {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.background.base,
    },
    ghost: {
      background: colors.background.base,
      typography: colors.foreground.primary,
      border: colors.border.default,
    },
    danger: {
      background: colors.background.base,
      typography: colors.danger.base,
      border: colors.background.base,
    },
  } as const;

  const currentVariantColors = variantColors[variant];

  const styles = StyleSheet.create({
    button: {
      opacity: disabled ? 0.7 : 1,
      height: buttonHeight,
      alignSelf: variant === "chip" ? "auto" : "stretch",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.width,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      borderWidth: HS(1),
      paddingHorizontal: buttonPaddingHorizontal,
      borderColor: currentVariantColors.border,
      backgroundColor: currentVariantColors.background,
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyles;
