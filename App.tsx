import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Monster from './Monster';
import Favourites from './Favourites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Monster" component={Monster} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;