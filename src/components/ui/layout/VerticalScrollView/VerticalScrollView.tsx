import { scalingMethods } from "@/utils";
import { ScrollView, ScrollViewProps, StyleSheet } from "react-native";
const { VS } = scalingMethods;

// Project defaults for every scrollable surface. Any prop can be overridden by
// the caller since props are spread after the defaults.
const VerticalScrollView = ({ children, ...props }: ScrollViewProps) => {
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
  // flexGrow so short content still fills the viewport — without it a screen
  // with one row can't stretch, and anything centred inside collapses.
  contentContainer: {
    flexGrow: 1,
    paddingBottom: VS(25),
  },
});

export default VerticalScrollView;
