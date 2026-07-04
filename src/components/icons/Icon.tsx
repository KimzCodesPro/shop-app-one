import { useTranslation } from "@/hooks";
import { Text, View } from "react-native";
import iconMapper from "./components/iconMapper";
import { IconName, IconProps } from "./types";

type IconComponentProps = { name: IconName; flip?: boolean } & IconProps;

const Icon = ({ name, size, color, style, flip }: IconComponentProps) => {
  const { direction } = useTranslation();

  const IconComponent = iconMapper[name];

  const shouldFlip = flip && direction === "rtl";

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
