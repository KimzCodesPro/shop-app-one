import { opacity, radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { iconButtonVariantColor } from "./helpers";
import { IconButtonVariant } from "./types";
const { VS, HS } = scalingMethods;

const useStyles = (variant: IconButtonVariant, disabled: boolean) => {
  const colors = useTheme();
  const currentVariantColor = iconButtonVariantColor(colors)[variant];

  const styles = StyleSheet.create({
    button: {
      width: HS(49),
      height: VS(49),
      alignItems: "center",
      justifyContent: "center",
      borderRadius: radius.sm,
      borderWidth: 1.5,
      borderColor: currentVariantColor.border,
      backgroundColor: currentVariantColor.background,
      opacity: disabled ? opacity.disabled : opacity.full,
    },
  });

  return { styles, iconColor: currentVariantColor.icon };
};

export default useStyles;
