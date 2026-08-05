import Icon from "@/components/icons";
import { useState } from "react";
import { Pressable, View } from "react-native";
import Typography from "../Typography/Typography";
import { AccordionProps } from "./types";
import useStyles from "./useStyles";

const Accordion = ({ items, style }: AccordionProps) => {
  const [expandedItem, setExpandedItem] = useState(0);
  const { colors, styles } = useStyles();

  const handlePress = (itemId: number) => {
    setExpandedItem((prev) => (prev === itemId ? 0 : itemId));
  };

  return (
    <View style={[styles.container, style]}>
      {items.map((item) => {
        const isExpanded = expandedItem === item.id;

        return (
          <Pressable
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handlePress(item.id)}
          >
            <View style={styles.itemHeader}>
              <Typography variant="smallBold" color={colors.foreground.primary}>
                {item.title}
              </Typography>
              <Icon
                name={isExpanded ? "chevron-up" : "chevron-down"}
                size={22}
                color={colors.foreground.tertiary}
              />
            </View>
            {isExpanded && (
              <View style={styles.itemContent}>
                <Typography
                  variant="smallRegular"
                  color={colors.foreground.secondary}
                >
                  {item.content}
                </Typography>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

export default Accordion;
