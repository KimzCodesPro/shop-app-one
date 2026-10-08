import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../typography";
import { ROW_ICON_SIZE } from "./constants";
import RowNavTrailing from "./RowNavTrailing";
import { RowNavProps } from "./types";
import useStyles from "./useStyles";

const RowNav = ({
  variant,
  title,
  icon,
  style,
  onPress,
  ...trailingProps
}: RowNavProps) => {
  const { styles, rowNavItemColor } = useStyles();

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.mainInfo}>
        <Icon
          name={icon}
          size={ROW_ICON_SIZE}
          color={rowNavItemColor[variant]}
        />
        <Typography variant="smallBold" color={rowNavItemColor[variant]}>
          {title}
        </Typography>
      </View>
      <RowNavTrailing {...trailingProps} />
    </Pressable>
  );
};

export default RowNav;
