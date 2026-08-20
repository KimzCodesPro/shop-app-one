import { themeDark, themeLight, themeSystem } from "@/assets/images";
import { SwitchGroupChange } from "@/components/ui/inputs";
import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation, useUserPreferences } from "@/src/hooks";
import { Language, Theme } from "@/src/types";
import { useRef, useState } from "react";
import { ThemeOption } from "./components/ThemeRadioGroup/types";
import { PageNavigationList } from "./types";

const useHomeScreen = () => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const languageBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const themeBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const notificationsBottomSheetRef = useRef<BottomSheetRef | null>(null);
  const { t } = useTranslation();
  const {
    enableNotifications,
    setEnableNotifications,
    language: selectedLanguage,
    theme: selectedTheme,
    setLanguage,
    setTheme,
  } = useUserPreferences();

  // push notification handler
  const notificationOptions = [
    {
      label: t("account_pushNotifications"),
      value: "pushNotifications",
      enabled: enableNotifications,
    },
  ];

  const onToggleNotification = ({ value, enabled }: SwitchGroupChange) => {
    if (value === "pushNotifications") {
      setEnableNotifications(enabled);
    }
  };

  // lnaguage handler
  const languageOptions = [
    { label: t("common_english"), value: "en" },
    { label: t("common_arabic"), value: "ar" },
  ];

  const selectedLanguageLabel =
    languageOptions.find((option) => option.value === selectedLanguage)
      ?.label ?? "";

  const onSelectLanguage = (value: string) => {
    setLanguage(value as Language);
    languageBottomSheetRef.current?.close();
  };

  // theme handler

  const themeOptions: ThemeOption[] = [
    { label: t("common_light"), value: "light", image: themeLight },
    { label: t("common_dark"), value: "dark", image: themeDark },
    { label: t("common_system"), value: "system", image: themeSystem },
  ];

  const selectedThemeLabel =
    themeOptions.find((option) => option.value === selectedTheme)?.label ?? "";

  const onSelectTheme = (value: Theme) => {
    setTheme(value);
    themeBottomSheetRef.current?.close();
  };

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
          trailingValue: selectedLanguageLabel,
          onPress: () => languageBottomSheetRef.current?.expand(),
        },
        {
          variant: "default",
          icon: "palette",
          title: t("account_theme"),
          trailing: "chevronWithValue",
          trailingValue: selectedThemeLabel,
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
    languageBottomSheetRef,
    themeBottomSheetRef,
    notificationsBottomSheetRef,
    languageOptions,
    selectedLanguage,
    onSelectLanguage,
    notificationOptions,
    onToggleNotification,
    selectedTheme,
    themeOptions,
    onSelectTheme,
    pageNavigationList,
    logoutVisible,
    setLogoutVisible,
  };
};

export default useHomeScreen;
