import Icon from "@/components/icons";
import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import { useRef, useState } from "react";
import { Keyboard, Pressable } from "react-native";
import { Typography } from "../../../typography";
import FieldWrapper from "../shared/FieldWrapper";
import { fieldCurrentStatus } from "../shared/helpers";
import useSharedStyles from "../shared/useSharedStyles";
import { CHEVRON_ICON_SIZE } from "./constants";
import DropdownList from "./DropdownList";
import { DropdownProps } from "./types";

const Dropdown = ({
  label,
  placeholder,
  iconName,
  options,
  value,
  onSelect,
  errorMessage,
  style,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);

  const selectedOption = options.find((option) => option.value === value);

  const currentStatus = fieldCurrentStatus(
    selectedOption?.value ?? "",
    isOpen,
    errorMessage,
  );

  const { styles, colors } = useSharedStyles(currentStatus);

  const handleOpenSheet = () => {
    Keyboard.dismiss();
    setIsOpen(true);
    sheetRef.current?.present();
  };

  const handleSelectValue = (val: string) => {
    sheetRef.current?.dismiss();
    onSelect(val);
    setIsOpen(false);
  };

  return (
    <>
      <Pressable onPress={handleOpenSheet} style={styles.pressableWrapper}>
        <FieldWrapper
          label={label}
          fieldIconName={iconName}
          errorMessage={errorMessage}
          currentStatus={currentStatus}
          style={style}
        >
          <Typography
            variant="smallRegular"
            textTransform="capitalize"
            style={styles.dropdownValueText}
            color={
              selectedOption
                ? colors.foreground.primary
                : colors.foreground.tertiary
            }
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Typography>
          <Icon
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={CHEVRON_ICON_SIZE}
            color={colors.foreground.tertiary}
          />
        </FieldWrapper>
        <BottomSheet
          ref={sheetRef}
          title={label ?? placeholder}
          bottomSheetProps={{
            snapPoints: ["40%"],
            onDismiss: () => setIsOpen(false),
          }}
        >
          <BottomSheet.Scroll>
            <DropdownList
              options={options}
              value={value}
              onSelect={(val) => {
                handleSelectValue(val);
              }}
              style={styles.dropdownOption}
            />
          </BottomSheet.Scroll>
        </BottomSheet>
      </Pressable>
    </>
  );
};

export default Dropdown;
