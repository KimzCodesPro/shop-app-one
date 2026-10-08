import { radius, spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: spacing.space12.height,
      paddingHorizontal: spacing.space12.width,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: colors.border.default,
      backgroundColor: colors.background.base,
    },
  });

  return { styles, colors };
};

export default useStyles;
