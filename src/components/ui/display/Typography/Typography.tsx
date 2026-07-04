import useFontStyles from "@/hooks/useFontStyles";
import { TypographyVariant } from "@/types";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
} & TextProps;

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
