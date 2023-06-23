import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Images from "./utils/Images";

const IMAGES = Images.getImages()


export type CardProps = {id: string, image: any};

export const Card = ({ id, image }: CardProps) => (
  <View key={id} style={styles.container}>
    <View key={id} style={styles.item}>
      <Image style={styles.image} source={image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 190,
    width: 250,
    alignItems: "center"
  },
  image: {
    flex: 1,
  },
});
