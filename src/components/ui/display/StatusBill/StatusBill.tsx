import Icon from "@/components/icons";
import { View } from "react-native";
import Typography from "../Typography/Typography";

import { StatusBillProps } from "./types";
import useStyles from "./useStyles";

const StatusBill = ({
  iconName,
  variant = "filled",
  label,
  color,
  style,
}: StatusBillProps) => {
  const { styles, strongColorType } = useStyles(color, variant);
  return (
    <View style={[styles.container, style]}>
      {iconName && (
        <Icon name={iconName} size={13} color={strongColorType[color]} />
      )}
      <Typography
        variant="xsmallBold"
        color={strongColorType[color]}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </View>
  );
};

export default StatusBill;
