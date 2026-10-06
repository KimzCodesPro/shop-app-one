import { ThemePalette } from "@/src/types";

export const buttonVariantColor = (colors: ThemePalette) => {
  return {
    primary: {
      background: colors.primary.base,
      typography: colors.foreground.contrast,
      border: colors.primary.base,
    },
    "primary-outline": {
      background: colors.background.base,
      typography: colors.primary.base,
      border: colors.primary.base,
    },
    chip: {
      background: "transparent",
      typography: colors.primary.base,
      border: colors.primary.base,
    },
    link: {
      background: "transparent",
      typography: colors.primary.base,
      border: "transparent",
    },
    "link-danger": {
      background: "transparent",
      typography: colors.danger.base,
      border: "transparent",
    },
    ghost: {
      background: "transparent",
      typography: colors.foreground.primary,
      border: colors.border.default,
    },
  } as const;
};
