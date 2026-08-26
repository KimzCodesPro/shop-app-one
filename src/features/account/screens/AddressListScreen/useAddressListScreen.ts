import { useTranslation } from "@/src/hooks";

const useAddressListScreen = () => {
  const { t } = useTranslation();

  return { t };
};

export default useAddressListScreen;
