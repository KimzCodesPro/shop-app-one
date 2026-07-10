import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import FormInputErrorMessage from "./FormInputErrorMessage";
import FormInputLabel from "./FormInputLabel";
import { FormInputProps, StatusType } from "./types";
import useStyles from "./useStyles";

const FormInput = ({
  label,
  placeHolder,
  iconName,
  type,
  value,
  errorMessage,
  onChangeText,
  clearInput,
  style,
}: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputCurrentStatus: StatusType = errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";

  const { styles, colors } = useStyles(inputCurrentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  const iconColorMapping = {
    default: colors.fg.tertiary,
    focused: colors.primary.base,
    filled: colors.primary.base,
    error: colors.danger.base,
  };

  return (
    <View style={[styles.container, style]}>
      <FormInputLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon
          name={resolvedIconName}
          size={20}
          color={iconColorMapping[inputCurrentStatus]}
        />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeHolder}
          placeholderTextColor={colors.fg.tertiary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={type === "password" && !passwordVisible}
        />
        {type === "password" && value && (
          <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
            <Icon
              name={passwordVisible ? "eye-off" : "eye"}
              size={20}
              color={colors.fg.tertiary}
            />
          </Pressable>
        )}

        {type === "text" && value && (
          <Pressable onPress={clearInput}>
            <Icon name="close" size={20} color={colors.fg.tertiary} />
          </Pressable>
        )}
      </View>
      <FormInputErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default FormInput;
