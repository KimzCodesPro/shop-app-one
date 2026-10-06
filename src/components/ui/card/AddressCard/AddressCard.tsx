import { StatusVariant } from "@/src/types";
import IconBadge from "../IconBadge/IconBadge";
import InfoCard from "../InfoCard/InfoCard";
import StatusBill from "../StatusBill/StatusBill";
import { AddressCardProps } from "./types";

import { useTranslation } from "@/src/hooks";
import { addressColorMapping, addressIcon, addressLabel } from "./constant";

const AddressCard = ({
  city,
  address,
  type,
  isSelected,
  onPress,
  style,
}: AddressCardProps) => {
  const { t } = useTranslation();
  const colorSchema = addressColorMapping[type] as StatusVariant;

  const StatusBillLabel = t(addressLabel[type]);

  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading title={city} description={address} />
      <InfoCard.Trailing>
        <IconBadge iconName="map-pin" variant={colorSchema} />
        <StatusBill
          iconName={addressIcon[type]}
          label={StatusBillLabel}
          color={colorSchema}
        />
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default AddressCard;
