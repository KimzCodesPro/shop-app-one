import { Typography } from "@/components/ui/typography";
import { Image } from "expo-image";
import { View } from "react-native";
import type { CarouselItemProps } from "./types";
import useStyles from "./useStyles";

const CarouselItem = ({ image, title, description }: CarouselItemProps) => {
  const { styles } = useStyles();
  return (
    <View style={styles.container}>
      <Image
        source={image}
        contentFit="cover"
        transition={1000}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Typography variant="largeBold" style={styles.title}>
          {title}
        </Typography>
        <Typography variant="smallRegular" style={styles.description}>
          {description}
        </Typography>
      </View>
    </View>
  );
};

export default CarouselItem;
