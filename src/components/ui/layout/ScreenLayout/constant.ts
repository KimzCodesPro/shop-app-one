import { spacing } from "@/constants";
import { scalingMethods } from "@/utils";
const { VS } = scalingMethods;

// Space between the top bar and the content. Lives here rather than on the
// bar so every renderTopBar gets it, and a screen can sit flush by omitting
// the prop. With no bar the wrapper has one child, so the gap collapses.
export const TOP_BAR_GAP = VS(20);

// Breathing room under the last item. Design spec, not safe area — the tab
// bar already absorbs insets.bottom, so with a tab bar this is all we add.
export const CONTENT_BOTTOM_GAP = VS(25);

// Gutter between the screen's content and the device edges.
const CONTENT_PADDING_HORIZONTAL = spacing.space24.width;

// Sits on the content only, never the wrapper — TopBar carries its own
// paddingHorizontal, so a wrapper-level gutter would double up on it.
export const SIDE_PADDING = {
  both: { paddingHorizontal: CONTENT_PADDING_HORIZONTAL },
  start: { paddingStart: CONTENT_PADDING_HORIZONTAL },
  end: { paddingEnd: CONTENT_PADDING_HORIZONTAL },
  none: {},
} as const;
