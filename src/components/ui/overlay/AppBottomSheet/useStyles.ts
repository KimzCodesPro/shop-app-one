import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    backDrop: {
      backgroundColor: colors.background.overlay,
    },
    bottomSheet: {
      backgroundColor: colors.background.base,
      borderRadius: radius.sheet,
    },
    handleStyle: {
      paddingTop: spacing.space16.height,
      paddingBottom: 0,
    },
    handleIndicatorStyle: {
      width: HS(44),
      height: VS(4),
      backgroundColor: colors.border.default,
    },
    bottomSheetContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.space16.height,
      paddingHorizontal: spacing.space24.width,
      paddingTop: spacing.space16.height,
      paddingBottom: spacing.space24.height,
    },
    title: {
      color: colors.foreground.primary,
      textAlign: "center",
      marginBottom: spacing.space8.height,
    },
    description: {
      color: colors.foreground.secondary,

      textAlign: "center",
    },
    bottomSheetContent: {
      marginTop: spacing.space16.height,
    },
  });

  return { styles };
};

export default useStyles;
