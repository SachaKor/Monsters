import React, {Component, useState} from 'react';
import {StyleSheet, View, TouchableHighlight, Image} from 'react-native';
import Images from './Images';

function Monster() {

    const [headNumber, setHeadNumber] = useState(1);
    const [bodyNumber, setBodyNumber] = useState(2);
    const [legsNumber, setLegsNumber] = useState(3)

    const head = Images.GetImage(
        `${headNumber}.png`,
    );

    const body = Images.GetImage(
        `${bodyNumber}.png`,
    );

    const legs = Images.GetImage(
        `${legsNumber}.png`,
    );



    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.img} onPress={() => setHeadNumber(1+(headNumber + 1)%3)}>
          <Image  source={head} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.img} onPress={() => setBodyNumber(1+(bodyNumber + 1)%3)}>
          <Image source={body} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.img} onPress={() => setLegsNumber(1+(legsNumber + 1)%3)}>
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
        flex: 1,
    },
});

export default Monster;