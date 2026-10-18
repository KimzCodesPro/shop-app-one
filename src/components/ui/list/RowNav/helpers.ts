import { ThemePalette } from "@/types";

// A function rather than a plain object: the values come from the resolved
// theme, so they can only be read once useTheme has run.
export const rowNavColor = (colors: ThemePalette) =>
  ({
    default: colors.foreground.primary,
    danger: colors.danger.base,
  }) as const;
