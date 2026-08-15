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

  if (scrollable) {
    return (
      <View style={styles.scrollViewWrapper}>
        {topBar}
        <DismissKeyboard style={[styles.container, contentContainerStyle]}>
          <VerticalScrollView {...scrollProps}>{children}</VerticalScrollView>
        </DismissKeyboard>
      </View>
    );
  }

  return (
    <View style={styles.viewWrapper}>
      {topBar}
      <DismissKeyboard style={[styles.container, contentContainerStyle]}>
        {children}
      </DismissKeyboard>
    </View>
  );
};

export default ScreenLayout;
