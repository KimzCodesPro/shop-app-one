import Icon from "@/components/icons";
import { View } from "react-native";
import FieldErrorMessage from "./FieldErrorMessage";
import FieldLabel from "./FieldLabel";
import { FieldWrapperProps } from "./sharedTypes";
import useSharedStyles from "./useSharedStyles";

const FieldWrapper = ({
  label,
  fieldIconName,
  errorMessage,
  children,
  currentStatus,
  style,
}: FieldWrapperProps) => {
  const { styles, statusColor } = useSharedStyles(currentStatus);

  return (
    <View style={[styles.container, style]}>
      <FieldLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon name={fieldIconName} size={20} color={statusColor} />
        {children}
      </View>
      <FieldErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FieldWrapper;
