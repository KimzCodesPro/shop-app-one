import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { VS, HS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    image: {
      width: HS(325),
      height: VS(380),
      marginBottom: spacing.space16.height,
      borderRadius: radius.xl,
    },
    textContainer: {
      alignItems: "center",
      width: HS(287),
      gap: spacing.space4.height,
    },
    title: {
      color: colors.foreground.primary,
      textAlign: "center",
    },
    description: {
      color: colors.foreground.tertiary,
      textAlign: "center",
    },
  });
  return { styles, colors };
};

export default useStyles;
