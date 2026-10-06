// Raw numbers, unlike radius/spacing: every glyph in iconMapper already runs
// its size through HS/VS, so scaling here would apply twice.
const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  "2xl": 36,
  "3xl": 44,
} as const;

export default iconSize;
