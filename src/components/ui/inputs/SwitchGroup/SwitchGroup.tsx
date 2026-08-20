import { Pressable, View } from "react-native";

import { Typography } from "../../display";
import Switch from "../Switch/Switch";
import { SwitchGroupProps } from "./types";
import useStyles from "./useStyles";

const SwitchGroup = ({ style, options, onValueChange }: SwitchGroupProps) => {
  const { styles, colors } = useStyles();

  return (
    <View style={[styles.container, style]}>
      {options.map((option) => (
        <Pressable
          key={option.value}
          style={styles.switchItem}
          onPress={() =>
            onValueChange({ value: option.value, enabled: !option.enabled })
          }
          disabled={option.disabled}
          accessibilityRole="switch"
          accessibilityState={{
            checked: option.enabled,
            disabled: option.disabled,
          }}
          accessibilityLabel={option.label}
        >
          <Typography
            variant="smallBold"
            textTransform="capitalize"
            color={colors.foreground.primary}
          >
            {option.label}
          </Typography>

          <Switch enabled={option.enabled} disabled={option.disabled} />
        </Pressable>
      ))}
    </View>
  );
};

export default SwitchGroup;
