import { AddressTypes } from "@/components/ui/display/AddressCard/types";

export type AddressItemInfo = {
  id: string;
  governorate: string;
  streetName: string;
  buildingNum: string;
  city: string;
  floorNum: string;
  landMark: string;
  type: AddressTypes;
};

export type AddressListProps = {
  items: AddressItemInfo[];
};
