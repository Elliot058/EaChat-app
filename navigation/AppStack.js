import React from 'react';

import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
};

export default AppStack;

// fwjkebjfnekf
