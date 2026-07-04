import Icon from "@/components/icons";
import { View } from "react-native";
import { Typography } from "../../display";
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
          color={colors.fg.tertiary}
          textTransform="capitalize"
        >
          {trailingValue}
        </Typography>
      )}
      <Icon name="chevron" size={22} color={colors.fg.tertiary} flipOnRTL />
    </View>
  );
};

export default RowNavTrailing;
