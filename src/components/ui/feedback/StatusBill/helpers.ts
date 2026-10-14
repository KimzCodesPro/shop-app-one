import { ThemePalette } from "@/types";

export const statusBillColor = (colors: ThemePalette) =>
  ({
    outline: {
      success: {
        borderColor: colors.success.strong,
        backgroundColor: colors.background.base,
        typographyColor: colors.success.strong,
      },
      warning: {
        borderColor: colors.warning.base,
        backgroundColor: colors.background.base,
        typographyColor: colors.warning.base,
      },
      info: {
        borderColor: colors.primary.pressed,
        backgroundColor: colors.background.base,
        typographyColor: colors.primary.pressed,
      },
      danger: {
        borderColor: colors.danger.strong,
        backgroundColor: colors.background.base,
        typographyColor: colors.danger.strong,
      },
    },
    fill: {
      success: {
        borderColor: colors.success.base,
        backgroundColor: colors.success.base,
        typographyColor: colors.foreground.contrast,
      },
      warning: {
        borderColor: colors.warning.base,
        backgroundColor: colors.warning.base,
        typographyColor: colors.foreground.contrast,
      },
      info: {
        borderColor: colors.primary.base,
        backgroundColor: colors.primary.base,
        typographyColor: colors.foreground.contrast,
      },
      danger: {
        borderColor: colors.danger.base,
        backgroundColor: colors.danger.base,
        typographyColor: colors.foreground.contrast,
      },
    },
  }) as const;
