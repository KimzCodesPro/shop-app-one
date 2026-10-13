import { scalingMethods } from "@/utils";
import { useRef, useState } from "react";
import { View } from "react-native";
import { Carousel, CarouselRef } from "react-native-reanimated-carousel";

import PaginationDot from "./PaginationDot/PaginationDot";
import type { CarouselProps } from "./types";
import useStyles from "./useStyles";

const { VS } = scalingMethods;

const RNCarousel = <T,>({
  data,
  height,
  renderItem,
  paginationDotType,
  loop = false,
  autoplay = false,
  autoplayInterval = 3000,
  style,
}: CarouselProps<T>) => {
  const ref = useRef<CarouselRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { styles } = useStyles();

  return (
    <View>
      <Carousel
        ref={ref}
        style={[styles.carousel, { height: VS(height) }, style]}
        loop={loop}
        autoplay={autoplay}
        autoplayInterval={autoplayInterval}
        data={data}
        renderItem={({ item }) => renderItem(item)}
        onProgressChange={(p) => {
          return setActiveIndex(Math.round(p) % data.length);
        }}
      />

      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <PaginationDot
            key={index}
            active={index === activeIndex}
            type={paginationDotType}
            onPress={() => ref.current?.scrollTo({ index, animated: true })}
          />
        ))}
      </View>
    </View>
  );
};

export default RNCarousel;
