import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setEnableNotifications,
  setLanguage,
  setTheme,
} from "@/store/usePreferences/usePreferencesSlice";
import { Language, Theme } from "@/types";

const useUserPreferences = () => {
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((state) => state.userPreferences);

  return {
    ...preferences,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setLanguage: (language: Language) => dispatch(setLanguage(language)),
    setEnableNotifications: () => dispatch(setEnableNotifications()),
  };
};

export default useUserPreferences;
