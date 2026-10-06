import { ThemePalette } from "@/src/types";
import { StatusType } from "./sharedTypes";

export const fieldStatusColor = (colors: ThemePalette) =>
  ({
    borderColor: {
      default: colors.border.default,
      focused: colors.primary.base,
      filled: colors.primary.base,
      error: colors.danger.base,
    },
    iconColor: {
      default: colors.foreground.tertiary,
      focused: colors.primary.base,
      filled: colors.primary.base,
      error: colors.danger.base,
    },
  }) as const;

export const fieldCurrentStatus = (
  value: string,
  isFocused: boolean,
  errorMessage: string | undefined,
): StatusType => {
  return errorMessage
    ? "error"
    : isFocused
      ? "focused"
      : value
        ? "filled"
        : "default";
};
