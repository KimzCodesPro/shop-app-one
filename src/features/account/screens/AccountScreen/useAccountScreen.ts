import { themeDark, themeLight, themeSystem } from "@/assets/images";
import { SwitchGroupChange } from "@/components/ui/inputs";
import { BottomSheetRef } from "@/components/ui/overlay";
import { useTranslation, useUserPreferences } from "@/hooks";
import { Language, Theme } from "@/types";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { PageNavigationList } from "./components/NavigationList/types";
import { ThemeOption } from "./components/ThemeRadioGroup/types";

const useAccountScreen = () => {
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

  const router = useRouter();
  // push notification handler
  const notificationOptions = [
    {
      label: t("account_settingPushNotifications"),
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
    { label: t("account_settingLanguageEnglish"), value: "en" },
    { label: t("account_settingLanguageArabic"), value: "ar" },
  ];

  const selectedLanguageLabel =
    languageOptions.find((option) => option.value === selectedLanguage)
      ?.label ?? "";

  const onSelectLanguage = (value: string) => {
    setLanguage(value as Language);
    languageBottomSheetRef.current?.dismiss();
  };

  // theme handler

  const themeOptions: ThemeOption[] = [
    { label: t("account_settingThemeLight"), value: "light", image: themeLight },
    { label: t("account_settingThemeDark"), value: "dark", image: themeDark },
    { label: t("account_settingThemeSystem"), value: "system", image: themeSystem },
  ];

  const selectedThemeLabel =
    themeOptions.find((option) => option.value === selectedTheme)?.label ?? "";

  const onSelectTheme = (value: Theme) => {
    setTheme(value);
    themeBottomSheetRef.current?.dismiss();
  };

  // navigation list for the home screen
  const pageNavigationList: PageNavigationList = [
    {
      title: t("account_sectionAccount"),
      rows: [
        {
          variant: "default",
          icon: "user",
          title: t("account_rowEditProfile"),
          trailing: "chevron",
          onPress: () => {
            router.push("/account/editProfile");
          },
        },
        {
          variant: "default",
          icon: "lock",
          title: t("account_rowChangePassword"),
          trailing: "chevron",
          onPress: () => {
            router.push("/(protected)/account/changePassword");
          },
        },
      ],
    },
    {
      title: t("account_sectionShopping"),
      rows: [
        {
          variant: "default",
          icon: "map-pin",
          title: t("account_rowAddress"),
          trailing: "chevron",
          onPress: () => {
            router.push("/(protected)/account/addressList");
          },
        },
        {
          variant: "default",
          icon: "truck",
          title: t("account_rowMyOrders"),
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: t("account_sectionPreferences"),
      rows: [
        {
          variant: "default",
          icon: "bell",
          title: t("account_rowNotifications"),
          trailing: "chevron",
          onPress: () => notificationsBottomSheetRef.current?.present(),
        },

        {
          variant: "default",
          icon: "world",
          title: t("account_rowLanguage"),
          trailing: "chevronWithValue",
          trailingValue: selectedLanguageLabel,
          onPress: () => languageBottomSheetRef.current?.present(),
        },
        {
          variant: "default",
          icon: "palette",
          title: t("account_rowTheme"),
          trailing: "chevronWithValue",
          trailingValue: selectedThemeLabel,
          onPress: () => themeBottomSheetRef.current?.present(),
        },
      ],
    },
    {
      title: t("account_sectionSupport"),
      rows: [
        {
          variant: "default",
          icon: "help",
          title: t("account_rowHelp"),
          trailing: "chevron",
          onPress: () => {
            router.push("/(protected)/account/helpAndSupport");
          },
        },
        {
          variant: "default",
          icon: "file-text",
          title: t("account_rowLegal"),
          trailing: "chevron",
          onPress: () => {
            router.push("/(protected)/account/legalAndPolicies");
          },
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

export default useAccountScreen;
