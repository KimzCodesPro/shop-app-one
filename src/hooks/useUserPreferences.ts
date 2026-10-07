import { useAppDispatch, useAppSelector } from "@/store/hooks";
import translation from "@/store/translation/translation.json";
import {
  setEnableNotifications,
  setLanguage,
  setTheme,
} from "@/store/userPreferences/userPreferencesSlice";
import { Language, Theme } from "@/types";
import Constants, { ExecutionEnvironment } from "expo-constants";
import * as Updates from "expo-updates";
import { DevSettings, I18nManager, useColorScheme } from "react-native";
import { persistor } from "../store";

const useUserPreferences = () => {
  const dispatch = useAppDispatch();
  const deviceColorScheme = useColorScheme();

  const preferences = useAppSelector((state) => state.userPreferences);

  const changeLanuage = async (language: Language) => {
    dispatch(setLanguage(language));
    const shouldBeRtl = translation[language].dir === "rtl";
    I18nManager.allowRTL(shouldBeRtl);
    I18nManager.forceRTL(shouldBeRtl);

    await persistor.flush();

    if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
      return;
    }

    if (__DEV__) {
      DevSettings.reload();
    } else {
      await Updates.reloadAsync();
    }
  };

  // resolve theme, we can derive the current theme from the preferences
  // if it set to be system, we derive the theme from the device settings.
  const systemTheme = deviceColorScheme === "dark" ? "dark" : "light";

  const resolvedAppTheme: Exclude<Theme, "system"> =
    preferences.theme === "system" ? systemTheme : preferences.theme;

  return {
    ...preferences,
    resolvedAppTheme,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setLanguage: changeLanuage,
    setEnableNotifications: (enabled: boolean) =>
      dispatch(setEnableNotifications(enabled)),
  };
};

export default useUserPreferences;
