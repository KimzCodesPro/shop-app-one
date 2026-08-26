import { Button, Dropdown, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { TopBar } from "@/src/components/ui/navigations";
import { View } from "react-native";
import styles from "./addNewAddressScreenStyles";
import { GOVERNORATE_OPTIONS } from "./data";
import useAddNewAddessScreen from "./useAddNewAddessScreen";

const AddNewAddressScreen = () => {
  const { t, addressTypeOptions } = useAddNewAddessScreen();
  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_addNewAddress")} goBack />}
    >
      <View style={styles.form}>
        <Dropdown
          label={t("account_addressType")}
          placeholder={t("account_addressTypePlaceholder")}
          iconName="map-pin"
          options={addressTypeOptions}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_streetName")}
          placeholder={t("account_streetNamePlaceholder")}
          iconName="map-pin-other"
          value=""
        />
        <TextInput
          label={t("account_buildingName")}
          placeholder={t("account_buildingNamePlaceholder")}
          iconName="building"
          value=""
        />
        <Dropdown
          label={t("account_governorate")}
          placeholder={t("account_governoratePlaceholder")}
          iconName="world"
          options={GOVERNORATE_OPTIONS}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_city")}
          placeholder={t("account_cityPlaceholder")}
          iconName="home"
          value=""
        />
        <TextInput
          label={t("account_floorNumber")}
          placeholder={t("account_floorNumberPlaceholder")}
          iconName="layers"
          value=""
        />
        <TextInput
          label={t("account_landmark")}
          placeholder={t("account_landmarkPlaceholder")}
          iconName="info-circle"
          value=""
        />
      </View>
      <Button
        title={t("account_saveAddress")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default AddNewAddressScreen;
