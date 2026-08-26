import { Button } from "@/src/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import AddressesList from "./components/AddressesList/AddressesList";
import addressesList from "./components/AddressesList/data";
import useAddressListScreen from "./useAddressListScreen";

export default function AddressListScreen() {
  const { t } = useAddressListScreen();
  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("account_address")} goBack />}
    >
      <VerticalScrollView>
        <AddressesList items={addressesList} />
      </VerticalScrollView>
      <Button title={t("account_addNewAddress")} onPress={() => {}} />
    </ScreenLayout>
  );
}
