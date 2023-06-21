import React, {Component, useState} from 'react';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';
import Images from './Images';

function Monster() {

    const [headNumber, setHeadNumber] = useState(1);
    const [bodyNumber, setBodyNumber] = useState(2);
    const [legsNumber, setLegsNumber] = useState(3)

    const head = Images.GetImage(
        `${headNumber}.gif`,
    );

    const body = Images.GetImage(
        `${bodyNumber}.gif`,
    );

    const legs = Images.GetImage(
        `${legsNumber}.gif`,
    );



    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.imgcontainer} onPress={() => setHeadNumber(1+(headNumber + 1)%3)}>
          <Image  source={head} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imgcontainer} onPress={() => setBodyNumber(1+(bodyNumber + 1)%3)}>
          <Image source={body} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.imgcontainer} onPress={() => setLegsNumber(1+(legsNumber + 1)%3)}>
          <Image  source={legs} />
        </TouchableHighlight>
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
});

export default Monster;