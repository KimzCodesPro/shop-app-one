import {
  addressColorMapping,
  addressIcon,
  addressLabel,
} from "@/components/ui/display/AddressCard/constant";
import { useTheme, useTranslation } from "@/hooks";
import Icon from "@/src/components/icons";
import { IconBadge, StatusBill, Typography } from "@/src/components/ui/display";
import { Button } from "@/src/components/ui/inputs";
import { Pressable, View } from "react-native";
import styles from "./AddressDetailsStyles";
import { AddressDetailsProps } from "./types";

const AddressDetails = ({
  type,
  governorate,
  streetName,
  buildingNum,
  city,
  floorNum,
  landMark,
  deleteHandler,
  setAsDefaultHandler,
  editHandler,
}: AddressDetailsProps) => {
  const colors = useTheme();
  const { t } = useTranslation();
  const statusColor = addressColorMapping[type];
  const statusIcon = addressIcon[type];
  const statusLabel = t(addressLabel[type]);

  return (
    <>
      <View style={styles.header}>
        <StatusBill
          iconName={statusIcon}
          color={statusColor}
          label={statusLabel}
        />
        <Pressable onPress={deleteHandler}>
          <IconBadge iconName="trash" variant="danger" />
        </Pressable>
      </View>
      {/* main address */}
      <View style={styles.addressMain}>
        <Typography variant="mediumBold" color={colors.foreground.primary}>
          {governorate}
        </Typography>
        <Typography variant="smallRegular" color={colors.foreground.tertiary}>
          {streetName}
        </Typography>
      </View>
      {/* info in list */}
      <View style={styles.addressInfoList}>
        <View style={styles.addressInfoSlot}>
          <Icon name="map-pin" size={18} color={colors.foreground.tertiary} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {city}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon name="building" color={colors.foreground.tertiary} size={18} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {t("account_building")} {buildingNum}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon name="layers" color={colors.foreground.tertiary} size={18} />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {t("account_floorNumber")} {floorNum}
          </Typography>
        </View>
        <View style={styles.addressInfoSlot}>
          <Icon
            name="info-circle"
            color={colors.foreground.tertiary}
            size={18}
          />
          <Typography color={colors.foreground.tertiary} variant="smallRegular">
            {landMark}
          </Typography>
        </View>
      </View>
      {/* actions */}
      <View style={styles.actions}>
        <Button
          variant="primary-outline"
          title={t("account_setAsDefault")}
          onPress={setAsDefaultHandler}
        />
        <Button
          variant="primary"
          title={t("account_editAddress")}
          onPress={editHandler}
        />
      </View>
    </>
  );
};

export default AddressDetails;
