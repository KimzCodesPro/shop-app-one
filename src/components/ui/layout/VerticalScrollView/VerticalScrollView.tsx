import { ScrollView, ScrollViewProps } from "react-native";

// Project defaults for every scrollable surface. Any prop can be overridden by
// the caller since props are spread after the defaults.
const VerticalScrollView = ({ children, ...props }: ScrollViewProps) => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default VerticalScrollView;
