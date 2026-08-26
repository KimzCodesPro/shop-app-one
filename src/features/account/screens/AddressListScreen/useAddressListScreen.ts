import { BottomSheetRef } from "@/src/components/ui/overlay";
import { useTranslation } from "@/src/hooks";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import addressesList from "./components/AddressesList/data";

const useAddressListScreen = () => {
  const router = useRouter();

  const addressBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const [selectedItemId, seSelectedItemId] = useState<string>("1");
  const [currentOpenedAddress, setCurrentOpenedAddress] = useState<
    string | null
  >(null);

  const selectedAddressInfo =
    addressesList.find((item) => item.id === currentOpenedAddress) ??
    addressesList[0];

  const AddressOpenFullInfoHandler = (id: string) => {
    setCurrentOpenedAddress(id);
    addressBottomSheetRef.current?.expand();
  };

  const setAddressAsDefaultHandler = () => {
    if (currentOpenedAddress) {
      seSelectedItemId(currentOpenedAddress);
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
    router,
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
