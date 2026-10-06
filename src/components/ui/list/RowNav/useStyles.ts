import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { rowNavColor } from "./helper";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const rowNavItemColor = rowNavColor(colors);

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
      height: VS(48),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: colors.background.base,
      borderRadius: radius.sm,
      borderWidth: HS(1),
      borderColor: colors.border.default,
      paddingHorizontal: spacing.space16.width,
    },
    mainInfo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space12.width,
    },
    trailingInfo: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: spacing.space8.width,
    },
  });
  return { styles, colors, rowNavItemColor };
};

export default useStyles;
