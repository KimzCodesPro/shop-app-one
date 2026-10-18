export type OtpInputProps = {
  numberOfDigits?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onTextChange?: (text: string) => void;
  onFilled?: (text: string) => void;
  verifyFailed: boolean;
};
