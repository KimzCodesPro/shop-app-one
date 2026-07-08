import { useTheme } from "@/hooks";
import { Pressable } from "react-native";
import Icon from "../../../icons";
import { TextInputType } from "./types";

type TextInputActionProps = {
  type: TextInputType;
  passwordVisible: boolean;
  onPasswordVisible: () => void;
  onClearInput?: () => void;
  hasValue: boolean;
};

const TextInputAction = ({
  onClearInput,
  passwordVisible,
  onPasswordVisible,
  hasValue,
  type,
}: TextInputActionProps) => {
  const colors = useTheme();

  return (
    <>
      {type === "password" && (
        <Pressable onPress={onPasswordVisible}>
          <Icon
            name={passwordVisible ? "eye-off" : "eye"}
            size={20}
            color={colors.fg.tertiary}
          />
        </Pressable>
      )}

      {type === "text" && hasValue && (
        <Pressable onPress={onClearInput}>
          <Icon name="close" size={16} color={colors.fg.tertiary} />
        </Pressable>
      )}
    </>
  );
};

export default TextInputAction;
