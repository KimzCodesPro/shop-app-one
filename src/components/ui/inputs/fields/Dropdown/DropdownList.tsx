import Icon from "@/src/components/icons/Icon";
import useTheme from "@/src/hooks/useTheme";
import { Pressable } from "react-native";
import { Typography } from "../../../display";
import { DropdownListProps } from "./types";

const DropdownList = ({
  options,
  value,
  onSelect,
  style,
}: DropdownListProps) => {
  const colors = useTheme();

  return (
    <>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <Pressable
            key={option.value}
            onPress={() => onSelect(option.value)}
            style={style}
          >
            <Typography
              variant={isSelected ? "normalBold" : "normalRegular"}
              textTransform="capitalize"
              color={
                isSelected ? colors.primary.base : colors.foreground.primary
              }
            >
              {option.label}
            </Typography>
            {isSelected && (
              <Icon name="check" size={23} color={colors.primary.base} />
            )}
          </Pressable>
        );
      })}
    </>
  );
};

export default DropdownList;
