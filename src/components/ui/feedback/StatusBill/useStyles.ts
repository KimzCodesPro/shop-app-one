import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StatusVariant } from "@/types";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { VARIANT_TO_SCHEMA } from "./constants";
import { statusBillColor } from "./helper";
import { StatusBillVariant } from "./types";
const { HS } = scalingMethods;

const useStyles = (
  StatusVariant: StatusVariant,
  variant: StatusBillVariant,
) => {
  const colors = useTheme();
  console.log();

  const { borderColor, backgroundColor, typographyColor } =
    statusBillColor(colors)[VARIANT_TO_SCHEMA[variant]][StatusVariant];

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
      borderWidth: HS(1),
      borderColor,
      paddingHorizontal: spacing.space8.width,
      paddingVertical: spacing.space4.height,
      borderRadius: radius.full,
      gap: spacing.space4.width,
    },
  });

  return { colors, styles, typographyColor };
};

export default useStyles;
