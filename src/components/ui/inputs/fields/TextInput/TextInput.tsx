import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FieldWrapper from "../shared/FieldWrapper";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/utils";
import { TextInputProps } from "./types";
const TextInput = ({
  label,
  placeholder,
  iconName,
  type,
  value,
  errorMessage,
  onChangeText,
  clearInput,
  style,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const currentStatus = fieldCurrentStatus(value, isFocused, errorMessage);

  const { styles, colors } = useSharedStyles(currentStatus);

  const resolvedIconName = type === "password" ? "lock" : iconName;

  return (
    <FieldWrapper
      label={label}
      fieldIconName={resolvedIconName}
      errorMessage={errorMessage}
      currentStatus={currentStatus}
      style={style}
    >
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.foreground.tertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={type === "password" && !passwordVisible}
      />
      {type === "password" && value && (
        <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}

      {type !== "password" && clearInput && value && (
        <Pressable onPress={clearInput}>
          <Icon name="close" size={20} color={colors.foreground.tertiary} />
        </Pressable>
      )}
    </FieldWrapper>
  );
};

export default TextInput;
