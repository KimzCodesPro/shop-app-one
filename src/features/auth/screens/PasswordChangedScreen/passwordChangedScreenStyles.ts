import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  centerArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInfo: {
    marginTop: spacing.space24.height,
    gap: spacing.space12.height,
  },
});

export default styles;
