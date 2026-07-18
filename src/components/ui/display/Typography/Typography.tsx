import useFontStyles from "@/hooks/useFontStyles";
import { Text } from "react-native";
import { TypographyProps } from "./types";

const Typography = ({
  variant,
  children,
  style,
  color,
  textTransform,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();
  return (
    <Text
      style={[typographyStyles[variant], { color, textTransform }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
