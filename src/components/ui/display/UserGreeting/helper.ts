import { ThemePalette } from "@/src/types";

export const userGreetingTypography = (colors: ThemePalette) => {
  return {
    lg: {
      userName: {
        font: "mediumBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.tertiary,
      },
    },
    sm: {
      userName: {
        font: "normalBold",
        color: colors.foreground.primary,
      },
      meta: {
        font: "smallRegular",
        color: colors.foreground.secondary,
      },
    },
  } as const;
};
