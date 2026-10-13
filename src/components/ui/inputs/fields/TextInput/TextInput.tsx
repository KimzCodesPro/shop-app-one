import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, TextInput as RNTextInput } from "react-native";
import FieldWrapper from "../shared/FieldWrapper";
import { fieldCurrentStatus } from "../shared/helpers";
import useSharedStyles from "../shared/useSharedStyles";
import { TEXT_INPUT_ICON_SIZE } from "./constants";
import { TextInputProps } from "./types";
const TextInput = ({
  label,
  placeholder,
  icon,
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

  const resolvedIcon = type === "password" ? "lock" : icon;

  return (
    <FieldWrapper
      label={label}
      fieldIconName={resolvedIcon}
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
            size={TEXT_INPUT_ICON_SIZE}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}

      {type !== "password" && clearInput && value && (
        <Pressable onPress={clearInput}>
          <Icon
            name="close"
            size={TEXT_INPUT_ICON_SIZE}
            color={colors.foreground.tertiary}
          />
        </Pressable>
      )}
    </FieldWrapper>
  );
};

export default TextInput;
