export type RadioGroupOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  options: RadioGroupOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};
