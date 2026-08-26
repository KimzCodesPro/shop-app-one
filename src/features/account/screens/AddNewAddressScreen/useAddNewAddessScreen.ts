import { useTranslation } from "@/hooks";

const useAddNewAddressScreen = () => {
  const { t } = useTranslation();

  const addressTypeOptions = [
    { label: t("account_addressTypeHome"), value: "home" },
    { label: t("account_addressTypeApartment"), value: "apartment" },
    { label: t("account_addressTypeOffice"), value: "office" },
    { label: t("account_addressTypeOther"), value: "other" },
  ];

  return { t, addressTypeOptions };
};

export default useAddNewAddressScreen;
