import { fonts } from "@/constants";
import { scalingMethods } from "@/utils";
import useTranslation from "./useTranslation";
const { VS, FS } = scalingMethods;

const fontStyles = {
  en: {
    heroBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    heroRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    xlargeBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    xlargeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    largeBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    mediumBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    normalBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    smallBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    smallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    smallLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    xsmallBold: {
      fontFamily: fonts.en.bold,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
    xsmallRegular: {
      fontFamily: fonts.en.regular,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
    xsmallLight: {
      fontFamily: fonts.en.light,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
  },
  ar: {
    heroBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    heroRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(38),
      lineHeight: VS(50),
    },
    xlargeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    xlargeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(22),
      lineHeight: VS(30),
    },
    largeBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    largeLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(18),
      lineHeight: VS(26),
    },
    mediumBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    mediumLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(16),
      lineHeight: VS(26),
    },
    normalBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    normalLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(14),
      lineHeight: VS(22),
    },
    smallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    smallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    smallLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(12),
      lineHeight: VS(22),
    },
    xsmallBold: {
      fontFamily: fonts.ar.bold,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
    xsmallRegular: {
      fontFamily: fonts.ar.regular,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
    xsmallLight: {
      fontFamily: fonts.ar.light,
      fontSize: FS(10),
      lineHeight: VS(14),
    },
  },
} as const;

const useFontStyles = () => {
  const { language } = useTranslation();

  return fontStyles[language];
};

export default useFontStyles;
