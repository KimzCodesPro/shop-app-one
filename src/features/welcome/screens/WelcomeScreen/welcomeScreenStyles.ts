import { spacing } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.space8.height,
  },
  languageSwitcher: {
    marginBottom: spacing.space16.height,
  },

  actionsButton: {
    gap: spacing.space16.height,
    marginTop: "auto",
  },
  linkButton: {
    height: "auto",
  },
});

export default styles;
