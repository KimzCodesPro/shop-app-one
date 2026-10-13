import { opacity, radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { buttonVariantColor } from "./helper";
import { SizeType, VariantType } from "./types";
const { VS } = scalingMethods;

const useStyles = (
  variant: VariantType,
  size?: SizeType,
  disabled?: boolean,
) => {
  const colors = useTheme();

  const buttonHeight = size === "sm" ? VS(40) : VS(50);

  const currentVariantColors = buttonVariantColor(colors)[variant];

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "stretch",
      height: buttonHeight,
      gap: spacing.space8.width,
      borderWidth: 1,
      borderRadius: variant === "chip" ? radius.full : radius.sm,
      borderColor: currentVariantColors.border,
      backgroundColor: currentVariantColors.background,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, typographyColor: currentVariantColors.typography };
};

export default useStyles;
