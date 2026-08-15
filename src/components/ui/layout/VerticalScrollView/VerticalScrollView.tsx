import { ScrollView, StyleSheet } from "react-native";
import { CONTENT_BOTTOM_GAP } from "../ScreenLayout/constant";
import type { VerticalScrollViewProps } from "./types";

// Project defaults for every scrollable surface. Any prop can be overridden by
// the caller since props are spread after the defaults.
const VerticalScrollView = ({
  children,
  ...props
}: VerticalScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainer,
        props.contentContainerStyle,
      ]}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    paddingBottom: CONTENT_BOTTOM_GAP,
  },
});

export default VerticalScrollView;
