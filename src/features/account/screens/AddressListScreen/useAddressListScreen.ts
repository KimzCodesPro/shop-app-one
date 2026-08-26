import { BottomSheetRef } from "@/src/components/ui/overlay";
import { useTranslation } from "@/src/hooks";
import { useRef, useState } from "react";
import addressesList from "./components/AddressesList/data";

const useAddressListScreen = () => {
  const [selectedItemId, seSelectedItemId] = useState<string>("1");
  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const currentOpenedAddress = useRef<string | null>(null);

  const selectedAddressInfo =
    addressesList.find((item) => item.id === selectedItemId) ??
    addressesList["1"];

  const AddressOpenFullInfoHandler = (id: string) => {
    currentOpenedAddress.current = id;
    addressBottomSheetRef.current?.expand();
  };

  const setAddressAsDefaultHandler = () => {
    if (currentOpenedAddress.current) {
      seSelectedItemId(currentOpenedAddress.current);
      addressBottomSheetRef.current?.close();
    }
  };

  const deleteAddressHandler = () => {
    addressBottomSheetRef.current?.close();
  };

  const editAddressHandler = () => {
    addressBottomSheetRef.current?.close();
  };

  const { t } = useTranslation();

  return {
    t,
    selectedItemId,
    addressBottomSheetRef,
    AddressOpenFullInfoHandler,
    selectedAddressInfo,
    deleteAddressHandler,
    editAddressHandler,
    setAddressAsDefaultHandler,
  };
};

export default useAddressListScreen;
