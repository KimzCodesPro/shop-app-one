import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    backDrop: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: spacing.space24.width,
      backgroundColor: colors.background.overlay,
    },
    content: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: colors.background.base,
      borderRadius: radius.xl,
      paddingVertical: spacing.space12.height,
      paddingHorizontal: spacing.space12.width,
      shadowColor: colors.misc.shadow,
      shadowOffset: {
        width: 0,
        height: VS(8),
      },
      shadowOpacity: 0.15,
      shadowRadius: 24,
      elevation: 8,
    },
    contentCloseBTN: {
      position: "absolute",
      height: VS(32),
      width: HS(32),
      backgroundColor: colors.background.surface,
      borderRadius: radius.full,
      justifyContent: "center",
      alignItems: "center",
      top: spacing.space12.height,
      right: spacing.space12.width,
    },
    contentHeader: {
      alignItems: "center",
      justifyContent: "center",
    },
    contentTitle: {
      textAlign: "center",
    },
    contentDescription: {
      textAlign: "center",
    },
    contentChildren: {
      width: "100%",
    },
  });
  return { styles, colors };
};

export default useStyles;
