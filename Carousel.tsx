import React, { useState, useRef } from "react";
import { View} from "react-native";
import Carousel from "react-native-snap-carousel";
import Images from "./utils/Images";
import { CardProps, Card } from "./Card";

const IMAGES = Images.getImages();


function CarouselComponent () {
  const [_, setActiveIndex] = useState<number>(0);
  const carouselEl = useRef(null);
  const handleSnapToItem = (index: number) => {
    setActiveIndex(index);
  };


  const renderItem = ({ item, index }: { item: CardProps; index: number }) => (
    <Card key={index} id={item.id} image={item.image} />
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
        <Carousel
          ref={carouselEl}
          data={IMAGES}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => handleSnapToItem(index)}
          layoutCardOffset={18}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          initialNumToRender={3}
        />
    </View>
  );
};

export default CarouselComponent;