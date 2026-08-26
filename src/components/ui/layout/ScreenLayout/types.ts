// Which sides carry the screen's horizontal padding. start/end rather than

import { ScrollViewProps, StyleProp, ViewStyle } from "react-native";

// left/right so the padding follows the writing direction under RTL.
export type ScreenPaddingSides = "both" | "start" | "end" | "none";

type ScreenLayoutBaseProps = {
  renderTopBar?: () => React.ReactNode;
  hasTabBar?: boolean;
  paddingSides?: ScreenPaddingSides;
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  dismissKeyboardOnTap?: boolean;
};

type ScreenLayoutConditionalProps =
  | {
      scrollable?: false;
      scrollProps?: never;
    }
  | {
      scrollable: true;
      scrollProps?: ScrollViewProps;
    };

export type ScreenLayoutProps = ScreenLayoutBaseProps &
  ScreenLayoutConditionalProps;

export type UseStylesArgs = {
  hasTopBar: boolean;
  hasTabBar: boolean;
  paddingSides: ScreenPaddingSides;
};
