
import React from 'react';
import { View, Button } from 'react-native';

function HomeScreen({ navigation } : {navigation: any}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Start"
          onPress={() => navigation.navigate('Monster')}
        />
      </View>
    );
  }

  export default HomeScreen;