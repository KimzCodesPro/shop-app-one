import { spacing } from "@/src/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.space8.height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressMain: {
    marginBottom: spacing.space8.height,
  },
  addressInfoList: {
    gap: spacing.space8.height,
  },
  addressInfoSlot: {
    flexDirection: "row",
    gap: spacing.space8.height,
    alignItems: "center",
  },
  actions: {
    marginTop: spacing.space24.height,
    gap: spacing.space12.height,
  },
});

export default styles;
