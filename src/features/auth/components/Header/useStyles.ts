import { spacing } from "@/constants";
import { useTheme } from "@/hooks";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const colors = useTheme();
  const styles = StyleSheet.create({
    container: {
      gap: spacing.space4.height,
      marginBottom: spacing.space32.height,
    },
  });
  return { styles, colors };
};

export default useStyles;
