import Icon from "@/components/icons";
import { useState } from "react";
import { TextInput as NativeTextInput, View } from "react-native";
import DisplayErrorMessage from "./DisplayErrorMessage";
import TextInputAction from "./TextInputAction";
import TextInputLabel from "./TextInputLabel";
import { StatusType, TextInputProps } from "./types";
import useStyles from "./useStyles";

const TextInput = ({
  type = "text",
  label,
  placeholder,
  errorMessage,
  value,
  onChange,
  onClearInput,
  icon,
  style,
}: TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const status: StatusType = errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";

  const { colors, styles } = useStyles(status);

  const iconMapperColor = {
    error: colors.danger.base,
    focused: colors.primary.base,
    default: colors.fg.tertiary,
    filled: colors.primary.base,
  };

  return (
    <View style={[styles.container, style]}>
      <TextInputLabel label={label} />
      <View style={styles.inputWrapper}>
        <Icon size={20} name={icon} color={iconMapperColor[status]} />
        <NativeTextInput
          value={value}
          onChangeText={onChange}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          placeholderTextColor={colors.fg.tertiary}
          style={styles.inputText}
          secureTextEntry={type === "password" && !passwordVisible}
        />
        <TextInputAction
          type={type}
          passwordVisible={passwordVisible}
          hasValue={!!value}
          onClearInput={onClearInput}
          onPasswordVisible={() => setPasswordVisible((prev) => !prev)}
        />
      </View>
      <DisplayErrorMessage errorMessage={errorMessage} />
    </View>
  );
};

export default TextInput;
