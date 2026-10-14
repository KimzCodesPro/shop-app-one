import { IconBadge } from "../../display";
import { StatusBill } from "../../feedback";
import InfoCard from "../InfoCard/InfoCard";
import { PaymentCardProps } from "./types";

const PaymentCard = ({
  cardNumber,
  cardType,
  expiryDate,
  variant = "info",
  isSelected,
  isDefault,
  onPress,
  style,
}: PaymentCardProps) => {
  const formattedCardNumber = `•••• •••• •••• ${cardNumber}`;
  const IconColors = isDefault ? "info" : variant;
  return (
    <InfoCard onPress={onPress} style={style} isSelected={isSelected}>
      <InfoCard.Leading
        title={formattedCardNumber}
        description={`${cardType} · Expires ${expiryDate}`}
      />
      <InfoCard.Trailing>
        <IconBadge iconName="credit-card" variant={IconColors} />
        {isDefault && (
          <StatusBill iconName="check" label="Default" color="info" />
        )}
      </InfoCard.Trailing>
    </InfoCard>
  );
};

export default PaymentCard;
