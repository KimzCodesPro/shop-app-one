import useFontStyles from "@/hooks/useFontStyles";
import { TypographyVariant } from "@/types";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
} & TextProps;

const Typography = ({
  variant,
  children,
  style,
  color,
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles();
  return (
    <Text style={[typographyStyles[variant], { color }, style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
