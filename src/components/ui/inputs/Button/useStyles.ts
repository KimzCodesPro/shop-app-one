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

  const backGroundColorVariant = {
    primary: colors.primary.base,
    link: colors.background.base,
    chip: colors.background.base,
    ghost: colors.background.base,
    danger: colors.background.base,
  };

  const borderColorVariant = {
    primary: colors.primary.base,
    link: colors.background.base,
    chip: colors.primary.base,
    ghost: colors.border.default,
    danger: colors.background.base,
  };

  const styles = StyleSheet.create({
    button: {
      opacity: disabled ? 0.7 : 1,
      height: buttonHeight,
      alignSelf: variant === "chip" ? "auto" : "stretch",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.width,
      borderRadius: variant === "chip" ? radius.full : radius.md,
      borderWidth: HS(1),
      paddingHorizontal: buttonPaddingHorizontal,
      borderColor: borderColorVariant[variant],
      backgroundColor: backGroundColorVariant[variant],
    },
  });

  return { styles, colors };
};

export default useStyles;
