import Icon from "@/components/icons";
import { Pressable, View } from "react-native";
import { Typography } from "../../display";
import { CustomBottomTabButtonProps } from "./types";
import useStyle from "./useStyles";

const MAX_BADGE_COUNT = 9;
const ICON_SIZE = 25;

const CustomBottomTabButton = ({
  iconName,
  label,
  badge = 0,
  isFocused,
  ref,
  // Dropped on purpose: TabTrigger lays its slot out as a row, and the
  // button owns its own layout.
  style: _style,
  ...rest
}: CustomBottomTabButtonProps) => {
  const { styles, focusedColor, colors } = useStyle(isFocused);

  const badgeLabel = badge ? `${label}, ${badge}` : label;
  const displayBadge = badge > MAX_BADGE_COUNT ? `${MAX_BADGE_COUNT}+` : badge;

  return (
    <Pressable
      ref={ref}
      {...rest}
      role="tab"
      aria-selected={isFocused}
      accessibilityLabel={badgeLabel}
      style={styles.tabButton}
    >
      <View style={styles.tabItem}>
        <View style={styles.iconWrapper}>
          <Icon size={ICON_SIZE} name={iconName} color={focusedColor} />
          {!!badge && (
            <View style={styles.badge}>
              <Typography
                variant="xsmallBold"
                color={colors.foreground.contrast}
              >
                {displayBadge}
              </Typography>
            </View>
          )}
        </View>
        <Typography
          variant="xsmallBold"
          color={focusedColor}
          textTransform="capitalize"
        >
          {label}
        </Typography>
      </View>
    </Pressable>
  );
};

export default CustomBottomTabButton;
