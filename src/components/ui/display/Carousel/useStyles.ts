import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const useStyles = () => {
  const styles = StyleSheet.create({
    carousel: {
      width: "100%",
    },
    paginationContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.space8.width,
    },
  });
  return { styles };
};

export default useStyles;
