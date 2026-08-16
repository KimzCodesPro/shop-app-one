import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation } from "@/src/hooks";
import { useRef, useState } from "react";
import { PageNavigationList } from "./types";
const useHomeScreen = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);

  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const themeBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const notificationsBottomSheetRef = useRef<BottomSheetRef | null>(null);

  const { t } = useTranslation();

  // navigation list for the home screen
  const pageNavigationList: PageNavigationList = [
    {
      title: t("account_account"),
      rows: [
        {
          variant: "default",
          icon: "user",
          title: t("account_editProfile"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "lock",
          title: t("account_changePassword"),
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_shopping"),
      rows: [
        {
          variant: "default",
          icon: "map-pin",
          title: t("account_address"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "truck",
          title: t("account_myOrders"),
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_preferences"),
      rows: [
        {
          variant: "default",
          icon: "bell",
          title: t("account_notifications"),
          trailing: "chevron",
          onPress: () => notificationsBottomSheetRef.current?.expand(),
        },

        {
          variant: "default",
          icon: "world",
          title: t("account_language"),
          trailing: "chevronWithValue",
          trailingValue: t("common_english"),
          onPress: () => languageBottomSheetRef.current?.expand(),
        },
        {
          variant: "default",
          icon: "palette",
          title: t("account_theme"),
          trailing: "chevronWithValue",
          trailingValue: t("common_light"),
          onPress: () => themeBottomSheetRef.current?.expand(),
        },
      ],
    },
    {
      title: t("account_support"),
      rows: [
        {
          variant: "default",
          icon: "help",
          title: t("account_helpAndPolicies"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "default",
          icon: "file-text",
          title: t("account_legalAndPolicies"),
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "danger",
          icon: "logout",
          title: t("account_logout"),
          trailing: "chevron",
          onPress: () => setLogoutVisible(true),
        },
      ],
    },
  ] as const;

  return {
    t,
    pageNavigationList,
    logoutVisible,
    setLogoutVisible,
    languageBottomSheetRef,
    themeBottomSheetRef,
    notificationsBottomSheetRef,
  };
};

export default useHomeScreen;
