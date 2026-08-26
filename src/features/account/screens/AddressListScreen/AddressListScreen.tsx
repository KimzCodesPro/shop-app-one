import { BottomSheet } from "@/components/ui/overlay/";
import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import AddressesList from "./components/AddressesList/AddressesList";
import addressesList from "./components/AddressesList/data";
import useAddressListScreen from "./useAddressListScreen";

export default function AddressListScreen() {
  const {
    t,
    router,
    selectedItemId,
    addressBottomSheetRef,
    AddressOpenFullInfoHandler,
    selectedAddressInfo,
    deleteAddressHandler,
    editAddressHandler,
    setAddressAsDefaultHandler,
  } = useAddressListScreen();

  return (
    <>
      <ScreenLayout
        renderTopBar={() => <TopBar title={t("account_address")} goBack />}
      >
        <VerticalScrollView>
          <AddressesList
            items={addressesList}
            selectedItem={selectedItemId}
            onPress={AddressOpenFullInfoHandler}
          />
        </VerticalScrollView>
        <Button
          title={t("account_addNewAddress")}
          onPress={() => {
            router.push("/account/addNewAddress");
          }}
        />
      </ScreenLayout>
      <BottomSheet
        ref={addressBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["59%"] }}
        title={t("account_addressDetails")}
      >
        <BottomSheet.Content>
          <AddressDetails
            type={selectedAddressInfo.type}
            governorate={selectedAddressInfo.governorate}
            streetName={selectedAddressInfo.streetName}
            buildingNum={selectedAddressInfo.buildingNum}
            city={selectedAddressInfo.city}
            floorNum={selectedAddressInfo.floorNum}
            landMark={selectedAddressInfo.landMark}
            editHandler={editAddressHandler}
            deleteHandler={deleteAddressHandler}
            setAsDefaultHandler={setAddressAsDefaultHandler}
          />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
}
