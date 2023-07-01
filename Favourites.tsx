import React from 'react';
import { StyleSheet, View } from 'react-native';
import LikeFab from './LikeFab';


function Favourites() {

    return (
        <View style={styles.conatainer}>
            <LikeFab/>
        </View>
    );
}

const styles = StyleSheet.create({
    conatainer: {
        alignItems: 'center',
        alignContent: 'flex-start'

    },
})

export default Favourites;