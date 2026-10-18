import { ThemePalette } from "@/types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const statusHaloColor = (colors: ThemePalette) =>
  ({
    success: {
      halo: colors.success.tint,
      inner: colors.success.base,
    },
    warning: {
      halo: colors.warning.tint,
      inner: colors.warning.base,
    },
    danger: {
      halo: colors.danger.tint,
      inner: colors.danger.base,
    },
    info: {
      halo: colors.primary.tint,
      inner: colors.primary.base,
    },
    secondary: {
      halo: colors.background.surface,
      inner: colors.foreground.tertiary,
    },
  }) as const;
