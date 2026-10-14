import { ThemePalette } from "@/types";

export const iconButtonVariantColor = (colors: ThemePalette) =>
  ({
    primary: {
      background: colors.background.base,
      icon: colors.primary.base,
      border: colors.primary.base,
    },
  }) as const;
