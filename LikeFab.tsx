import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function LikeFab() {

    var [ isPressed, setIsPressed ] = React.useState(false);

    return (
        <FAB 
            style={styles.fab} 
            icon = {<Icon 
                        name='heart' 
                        size={20} 
                        color={isPressed ? 'red' : 'white'} 
                    />}
            onPress={() => setIsPressed(!isPressed)}
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        width: 50,
        height: 50,
        alignItems: 'center',
        position: 'absolute', 
        top: 490, // TODO: make it relative to the bottom of the screen
        right: 10
    }
})

export default LikeFab;