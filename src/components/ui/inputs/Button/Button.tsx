import { Typography } from "@/components/ui/typography";
import { BUTTON_ICON_SIZE } from "./constants";

import Icon from "@/components/icons";
import { ActivityIndicator, Pressable } from "react-native";
import { ButtonProps } from "./types";
import useStyles from "./useStyles";

const Button = ({
  size,
  title,
  onPress,
  loading = { indicator: false },
  icon,
  variant = "primary",
  style,
  disabled = false,
}: ButtonProps) => {
  const { indicator: isLoading, text: loadingText } = loading;

  const isDisabled = disabled || isLoading;

  const { styles, typographyColor } = useStyles(variant, size, disabled);

  const typographyVariant = size === "sm" ? "smallBold" : "normalBold";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, style]}
      disabled={isDisabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={typographyColor} />
      ) : (
        icon && (
          <Icon name={icon} size={BUTTON_ICON_SIZE} color={typographyColor} />
        )
      )}
      <Typography variant={typographyVariant} color={typographyColor}>
        {(isLoading && loadingText) || title}
      </Typography>
    </Pressable>
  );
};

export default Button;
