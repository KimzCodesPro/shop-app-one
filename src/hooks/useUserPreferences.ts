import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setLanguage,
  setTheme,
} from "@/store/usePreferences/usePreferencesSlice";
import { Langauge, Theme } from "@/types";

const useUserPreferences = () => {
  const dispatch = useAppDispatch();
  const preferences = useAppSelector((state) => state.userPreferences);

  return {
    ...preferences,
    setTheme: (theme: Theme) => dispatch(setTheme(theme)),
    setLanguage: (langauge: Langauge) => dispatch(setLanguage(langauge)),
  };
};

export default useUserPreferences;
