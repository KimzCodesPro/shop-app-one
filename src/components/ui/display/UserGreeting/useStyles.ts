import { useTheme } from "@/hooks";
import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";
import { userGreetingTypography } from "./helper";

const useStyles = () => {
  const colors = useTheme();
  const TypographyMapping = userGreetingTypography(colors);

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.space12.width,
      alignItems: "center",
    },
  });

  return { styles, colors, TypographyMapping };
};

export default useStyles;
