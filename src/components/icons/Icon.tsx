import { useTranslation } from "@/hooks";
import { Text, View } from "react-native";
import iconMapper from "./components/iconMapper";
import { IconProps } from "./types";

const Icon = ({ name, size, color, style, flipOnRTL }: IconProps) => {
  const { direction } = useTranslation();

  const IconComponent = iconMapper[name];

  const shouldFlip = flipOnRTL && direction === "rtl";

  if (!IconComponent) {
    return (
      <View>
        <Text>{`Icon not found: ${name}`}</Text>
      </View>
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      style={[style, { transform: [{ scaleX: shouldFlip ? -1 : 1 }] }]}
    />
  );
};

export default Icon;
