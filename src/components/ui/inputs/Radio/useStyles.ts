import { radius } from "@/constants";
import { useTheme } from "@/hooks";
import { scalingMethods } from "@/utils";
import { StyleSheet } from "react-native";
const { HS, VS } = scalingMethods;

const useStyle = (isActive: boolean, disabled?: boolean) => {
  const colors = useTheme();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: HS(20),
      height: VS(20),
      backgroundColor: colors.background.base,
      borderRadius: radius.full,
      borderWidth: HS(1.5),
      borderColor: isActive ? colors.primary.base : colors.border.default,
      //   paddingVertical: VS(spacing.space4.height),
      //   paddingHorizontal: HS(spacing.space4.width),
      opacity: disabled ? 0.8 : 1,
    },
    indicator: {
      width: HS(10),
      height: VS(10),
      borderRadius: radius.full,
      backgroundColor: isActive ? colors.primary.base : colors.background.base,
      opacity: disabled ? 0.8 : 1,
    },
  });
  return { styles };
};

export default useStyle;
