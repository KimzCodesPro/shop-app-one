import { StatusType } from "./sharedTypes";

const fieldCurrentStatus = (
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

export { fieldCurrentStatus };
