import Icon from "@/components/icons";
import { View } from "react-native";
import { IconBadgeProps } from "./types";
import useStyles from "./useStyles";

const IconBadge = ({ iconName, style, color = "info" }: IconBadgeProps) => {
  const { styles, iconColors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      <Icon name={iconName} size={22} color={iconColors[color]} />
    </View>
  );
};

export default IconBadge;
