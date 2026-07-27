import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { StatusBillVariant } from "./types";
const { HS } = scalingMethods;

const useStyles = (colorSchema: StatusVariant, variant: StatusBillVariant) => {
  const colors = useTheme();

  const statusColors = {
    success: { tint: colors.success.tint, strong: colors.success.strong },
    warning: { tint: colors.warning.tint, strong: colors.warning.base },
    info: { tint: colors.primary.tint, strong: colors.primary.pressed },
    danger: { tint: colors.danger.tint, strong: colors.danger.strong },
  } as const;

  const currentStatusColors = statusColors[colorSchema];

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:
        variant === "outlined"
          ? colors.background.base
          : currentStatusColors.tint,
      borderWidth: HS(1),
      borderColor:
        variant === "outlined"
          ? currentStatusColors.strong
          : currentStatusColors.tint,
      paddingHorizontal: spacing.space8.width,
      paddingVertical: spacing.space4.height,
      borderRadius: radius.full,
      gap: spacing.space4.width,
    },
  });

  return { colors, styles, strongColor: currentStatusColors.strong };
};

export default useStyles;
