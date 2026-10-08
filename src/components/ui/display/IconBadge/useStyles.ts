import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
import { iconBadgeColor } from "./helper";
const { HS, VS } = scalingMethods;

const useStyles = () => {
  const colors = useTheme();

  const iconColors = iconBadgeColor(colors);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: VS(45),
      width: HS(45),
      borderRadius: radius.full,
      backgroundColor: colors.background.surface,
    },
  });

  return { styles, colors, iconColors };
};

export default useStyles;
