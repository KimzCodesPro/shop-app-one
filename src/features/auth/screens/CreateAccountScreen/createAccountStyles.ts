import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space12.height,
  },
  languageSwitcher: {
    marginBottom: spacing.space24.height,
  },
  formContainer: {
    gap: spacing.space16.height,
  },
  actions: {
    marginTop: "auto",
    gap: spacing.space16.height,
  },
  secondActionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.space8.width,
  },
  secondActionCreateAccountButton: {
    height: "auto",
  },
});

export default styles;
