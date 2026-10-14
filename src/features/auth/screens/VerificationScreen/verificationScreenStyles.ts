import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space16.height,
  },
  infoContainer: {
    marginVertical: spacing.space32.height,
  },
  infoContainerHeader: {
    marginBottom: spacing.space12.height,
  },
  actionRow: {
    marginTop: spacing.space48.height,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.space8.width,
  },
  resendButton: {
    height: "auto",
  },
  submitButton: {
    marginTop: "auto",
  },
  bottomSheetContent: {
    gap: spacing.space16.height,
  },
  changePasswordButton: {
    marginTop: spacing.space8.height,
  },
});

export default styles;
