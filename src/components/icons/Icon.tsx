import { Text, View } from "react-native";
import iconMapper from "./components/iconMapper";
import { IconName, IconProps } from "./types";

type IconComponentProps = { name: IconName; isRTL?: boolean } & IconProps;

const Icon = ({ name, size, color, style, isRTL }: IconComponentProps) => {
  const IconComponent = iconMapper[name];
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
      style={[style, { transform: [{ scaleX: isRTL ? -1 : 1 }] }]}
    />
  );
};

export default Icon;
