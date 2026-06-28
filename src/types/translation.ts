import translations from "../store/translation/translation.json";

export type Langauge = "en" | "ar";
export type Direction = "ltr" | "rtl";

export type TranslationKeys = keyof typeof translations.en.keys;

export type TranslateFn = (
  key: TranslationKeys,
  params?: Record<string, string | number>,
) => string;
