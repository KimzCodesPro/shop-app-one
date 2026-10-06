import { TRAILING_ICON_SIZE } from "./constants";
import Icon from "@/components/icons";
import { View } from "react-native";
import { Typography } from "../../typography";
import { RowNavTrailingProps } from "./types";
import useStyles from "./useStyles";

const RowNavTrailing = ({ trailing, trailingValue }: RowNavTrailingProps) => {
  const { styles, colors } = useStyles();
  if (trailing === "noChevron") return null;

  return (
    <View style={styles.trailingInfo}>
      {trailing === "chevronWithValue" && (
        <Typography
          variant="smallRegular"
          color={colors.foreground.tertiary}
          textTransform="capitalize"
        >
          {trailingValue}
        </Typography>
      )}
      <Icon
        name="chevron-right"
        size={TRAILING_ICON_SIZE}
        color={colors.foreground.tertiary}
        flipOnRTL
      />
    </View>
  );
};

export default RowNavTrailing;
