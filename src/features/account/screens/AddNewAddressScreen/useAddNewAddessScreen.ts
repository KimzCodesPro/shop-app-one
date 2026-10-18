import { useTranslation } from "@/hooks";

const useAddNewAddressScreen = () => {
  const { t } = useTranslation();

  const addressTypeOptions = [
    { label: t("common_addressHome"), value: "home" },
    { label: t("common_addressApartment"), value: "apartment" },
    { label: t("common_addressOffice"), value: "office" },
    { label: t("common_addressOther"), value: "other" },
  ];

  return { t, addressTypeOptions };
};

export default useAddNewAddressScreen;
