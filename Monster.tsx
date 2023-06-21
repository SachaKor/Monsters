import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, SafeAreaView, FlatList} from 'react-native';
import Images from './Images';


const DATA = [
  {
    id: '1',
    image: Images.GetImage(`1.gif`),
  },
  {
    id: '2',
    image: Images.GetImage(`2.gif`),
  },
  {
    id: '3',
    image: Images.GetImage(`3.gif`),
  }
]

type ItemProps = typeof DATA[0];

const Item = ({image}: any) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image}/>
  </View>
);

function SwipingImage() {

  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item image={item.image} />
  );

  return (
    <SafeAreaView style={styles.container1}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

function Monster() {

  const renderItem = ({ item }: { item: ItemProps }) => (
    <Item image={item.image} />
  );

  return (
    <View style={styles.container}>
      <SwipingImage/>
      <SwipingImage/>
      <SwipingImage/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    img: {
      height: '100%',
      width: '100%',
    },
    imgcontainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    container1: {
      flex: 1,
    },
    item: {
      backgroundColor: "#ffffff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      height: 200,
      width: 350,
      alignItems: 'center'
    },
    image: {
      flex: 1,
    },
});

export default Monster;