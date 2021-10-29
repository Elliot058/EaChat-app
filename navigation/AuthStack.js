import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: '#2c6bed'},
  headerTintColor: '#fff',
  headerTitleStyle: {color: 'white'},
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="onBoarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
