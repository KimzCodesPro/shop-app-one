import Icon from "@/components/icons";
import { View } from "react-native";
import { Typography } from "../../typography";
import { STATUS_ICON_SIZE } from "./constants";

import { StatusBillProps } from "./types";
import useStyles from "./useStyles";

const StatusBill = ({
  iconName,
  variant = "filled",
  label,
  color,
  style,
}: StatusBillProps) => {
  const { styles, typographyColor } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <Icon name={iconName} size={STATUS_ICON_SIZE} color={typographyColor} />
      )}
      <Typography
        variant="xsmallBold"
        color={typographyColor}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
