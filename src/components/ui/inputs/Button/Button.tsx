import { Typography } from "@/components/ui/display";

import Icon from "@/components/icons";
import { ActivityIndicator, Pressable } from "react-native";
import { ButtonProps } from "./types";
import useStyles from "./useStyles";

const Button = ({
  size,
  title,
  onPress,
  loading,
  icon,
  variant = "primary",
  style,
  disabled = false,
}: ButtonProps) => {
  console.log("render");
  const { styles, typographyColor } = useStyles(variant, size, disabled);

  const typographyVariant = size === "sm" ? "smallBold" : "normalBold";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
      disabled={loading?.indicator || disabled}
    >
      {!loading?.indicator && icon && (
        <Icon name={icon} size={22} color={typographyColor} />
      )}
      {loading?.indicator && (
        <ActivityIndicator color={typographyColor} size="small" />
      )}
      <Typography variant={typographyVariant} color={typographyColor}>
        {loading?.indicator ? loading.text || title : title}
      </Typography>
    </Pressable>
  );
};

export default Button;
