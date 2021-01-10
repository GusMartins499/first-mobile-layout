import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../../pages/SignIn';
import DrawerNavigation from '../DrawerNavigation';

const Stack = createStackNavigator();

const StackNavigation: React.FC = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="SignIn">
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
  </Stack.Navigator>
);

export default StackNavigation;
