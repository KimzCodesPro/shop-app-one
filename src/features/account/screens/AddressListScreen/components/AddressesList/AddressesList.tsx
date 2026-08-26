import { AddressCard } from "@/src/components/ui/display";
import styles from "../../addressListScreenStyles";
import { AddressListProps } from "./types";

const AddressesList = ({ items, selectedItem, onPress }: AddressListProps) => {
  return items.map((item) => {
    return (
      <AddressCard
        key={item.id}
        city={item.governorate}
        address={`${item.buildingNum} ${item.streetName}, ${item.city}`}
        type={item.type}
        style={styles.list}
        isSelected={selectedItem === item.id}
        onPress={() => onPress(item.id)}
      />
    );
  });
};

export default AddressesList;
