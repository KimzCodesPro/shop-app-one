import { StyleProp, ViewStyle } from "react-native";

type ListItem = {
  id: number;
  title: string;
  content: string;
};

export type AccordionProps = {
  items: ListItem[];
  style?: StyleProp<ViewStyle>;
};
