import { TranslateFn } from "@/types";
import { useAppSelector } from "../store/hooks";
import useUserPreferences from "./useUserPreferences";

const useTranslation = () => {
  const { language } = useUserPreferences();
  const translation = useAppSelector((state) => state.translation);

  const { dir: direction, keys } = translation[language];

  const t: TranslateFn = (key, params) => {
    const text = keys[key] ?? key;
    if (!params) return text;

    return text.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      return params[variable]?.toString() || match;
    });
  };

  return { direction, keys, language, t };
};

export default useTranslation;
