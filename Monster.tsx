import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, SafeAreaView, FlatList} from 'react-native';
import Images from './utils/Images';
import CarouselComponent from './Carousel';


function SwipingImage() {

  return (
    <SafeAreaView style={styles.container1}>
      <CarouselComponent/>
    </SafeAreaView>
  )
}

function Monster() {

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
      height: 200,
      width: 350,
      alignItems: 'center'
    },
    image: {
      flex: 1,
    },
});

export default Monster;