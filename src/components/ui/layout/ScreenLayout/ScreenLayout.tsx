import { View } from "react-native";
import DismissKeyboard from "../DismissKeyboard/DismissKeyboard";
import VerticalScrollView from "../VerticalScrollView/VerticalScrollView";
import { ScreenLayoutProps } from "./types";
import useStyle from "./useStyles";

const ScreenLayout = ({
  hasTabBar = false,
  paddingSides = "both",
  children,
  contentContainerStyle,
  dismissKeyboardOnTap = false,
  scrollable = false,
  scrollProps,
  renderTopBar,
}: ScreenLayoutProps) => {
  const { styles } = useStyle({
    hasTopBar: !!renderTopBar,
    hasTabBar,
    paddingSides,
  });

  const topBar = renderTopBar?.();

  const renderContent = (
    <View style={[styles.container, contentContainerStyle]}>{children}</View>
  );

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
        <VerticalScrollView
          {...scrollProps}
          contentContainerStyle={[
            styles.scrollViewContent,
            scrollProps?.contentContainerStyle,
          ]}
        >
          {children}
        </VerticalScrollView>
      </View>
    );
  }

  if (dismissKeyboardOnTap) {
    return (
      <DismissKeyboard style={styles.viewWrapper}>
        {topBar}
        {renderContent}
      </DismissKeyboard>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      {renderContent}
    </View>
  );
};

export default ScreenLayout;
