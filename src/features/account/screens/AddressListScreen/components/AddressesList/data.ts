import { AddressItemInfo } from "./types";

const addressesList: AddressItemInfo[] = [
  {
    id: "1",
    type: "home",
    governorate: "Cairo",
    streetName: "El Nasr Street",
    buildingNum: "12",
    city: "Nasr City",
    floorNum: "1",
    landMark: "Omar Shaheen Hospital",
  },
  {
    id: "2",
    type: "office",
    governorate: "Giza",
    streetName: "Gameat El Dewal El Arabeya",
    buildingNum: "45",
    city: "Mohandessin",
    floorNum: "3",
    landMark: "Mustafa Mahmoud Mosque",
  },
  {
    id: "3",
    type: "apartment",
    governorate: "Alexandria",
    streetName: "El Geish Road",
    buildingNum: "8",
    city: "Sidi Gaber",
    floorNum: "5",
    landMark: "Sidi Gaber Station",
  },
] as const;

export default addressesList;
