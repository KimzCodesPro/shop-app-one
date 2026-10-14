import { Button, Dropdown, TextInput } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { View } from "react-native";
import styles from "./addNewAddressScreenStyles";
import { GOVERNORATE_OPTIONS } from "./data";
import useAddNewAddessScreen from "./useAddNewAddessScreen";

const AddNewAddressScreen = () => {
  const { t, addressTypeOptions } = useAddNewAddessScreen();
  return (
    <ScreenLayout
      scrollable
      renderTopBar={() => <TopBar title={t("account_addAddressTitle")} goBack />}
    >
      <View style={styles.form}>
        <Dropdown
          label={t("account_addAddressFieldType")}
          placeholder={t("account_placeholderAddressType")}
          icon="map-pin"
          options={addressTypeOptions}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_addAddressFieldStreet")}
          placeholder={t("account_placeholderStreetName")}
          icon="map-pin-other"
          value=""
        />
        <TextInput
          label={t("account_addAddressFieldBuilding")}
          placeholder={t("account_placeholderBuildingName")}
          icon="building"
          value=""
        />
        <Dropdown
          label={t("account_addAddressFieldGovernorate")}
          placeholder={t("account_placeholderGovernorate")}
          icon="world"
          options={GOVERNORATE_OPTIONS}
          value=""
          onSelect={() => {}}
        />
        <TextInput
          label={t("account_addAddressFieldCity")}
          placeholder={t("account_placeholderCity")}
          icon="home"
          value=""
        />
        <TextInput
          label={t("account_addAddressFieldFloor")}
          placeholder={t("account_placeholderFloorNumber")}
          icon="layers"
          value=""
        />
        <TextInput
          label={t("account_addAddressFieldLandmark")}
          placeholder={t("account_placeholderLandmark")}
          icon="info-circle"
          value=""
        />
      </View>
      <Button
        title={t("account_addAddressSave")}
        onPress={() => {}}
        style={styles.submitButton}
      />
    </ScreenLayout>
  );
};

export default AddNewAddressScreen;
