import { useTheme } from "@/hooks";
import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: spacing.space12.width,
      alignItems: "center",
    },
    userInfo: {},
  });

  return { styles, colors };
};

export default useStyles;
