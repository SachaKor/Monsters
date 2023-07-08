import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Monster from './Monster';
import Favourites from './Favourites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Favourites" 
        component={Favourites} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name='heart' color='#00DDCC' size={20}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Monster" 
        component={Monster} 
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <FontAwesome5Brands name='octopus-deploy' color='#00DDCC' size={20}/>
          ),
        }}
      />
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