import useFontStyles from "@/hooks/useFontStyles";
import { Text } from "react-native";
import { TypographyProps } from "./types";

const Typography = ({
  variant,
  children,
  style,
  color,
  textTransform,
  forceLanguage,
  textAlign = "left",
  ...props
}: TypographyProps) => {
  const typographyStyles = useFontStyles(forceLanguage);

  return (
    <Text
      style={[
        typographyStyles[variant],
        { color, textTransform, textAlign },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Typography;
