import { BottomSheet, BottomSheetRef } from "@/components/ui/overlay";
import Icon from "@/src/components/icons";
import { useRef, useState } from "react";
import { Pressable } from "react-native";
import { Typography } from "../../../display";
import FieldWrapper from "../shared/FieldWrapper";
import useSharedStyles from "../shared/useSharedStyles";
import { fieldCurrentStatus } from "../shared/utils";
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
    setIsOpen(true);
    sheetRef.current?.expand();
  };

  const handleSelect = (val: string) => {
    sheetRef.current?.close();
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
            size={22}
            color={colors.foreground.tertiary}
          />
        </FieldWrapper>
        <BottomSheet
          ref={sheetRef}
          title={label ?? placeholder}
          bottomSheetProps={{
            snapPoints: ["50%"],
            onClose: () => setIsOpen(false),
          }}
        >
          <BottomSheet.Scroll>
            <DropdownList
              options={options}
              value={value}
              onSelect={(val) => {
                handleSelect(val);
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
