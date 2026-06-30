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
  const { styles, colors } = useStyles(variant, size, disabled);

  const typographyVariant = size === "sm" ? "smallBold" : "normalBold";

  const typographyColorVariant = {
    primary: colors.fg.contrast,
    link: colors.primary.base,
    chip: colors.primary.base,
    ghost: colors.fg.primary,
    danger: colors.danger.base,
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
      disabled={loading?.indicator || disabled}
    >
      {!loading?.indicator && icon && (
        <Icon name={icon} size={22} color={typographyColorVariant[variant]} />
      )}
      {loading?.indicator && (
        <ActivityIndicator
          color={typographyColorVariant[variant]}
          size="small"
        />
      )}
      <Typography
        variant={typographyVariant}
        color={typographyColorVariant[variant]}
      >
        {loading?.indicator ? loading.text || title : title}
      </Typography>
    </Pressable>
  );
};

export default Button;
