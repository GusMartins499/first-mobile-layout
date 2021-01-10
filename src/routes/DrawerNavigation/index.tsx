import React from 'react';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/Logo-Example.png';
import {Header} from './styles';

import Screen1 from '../../pages/Screen1';
import Screen2 from '../../pages/Screen2';

const CustomDrawer = (props: any) => (
  <ScrollView>
    <Header>
      <Image source={logo} />
    </Header>
    <DrawerItemList
      activeTintColor="#F4EDE8"
      inactiveTintColor="#666360"
      labelStyle={Styled.Label}
      itemStyle={Styled.BackColorItem}
      {...props}
    />
  </ScrollView>
);

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC = () => (
  <Drawer.Navigator
    drawerStyle={Styled.BackColorDrawer}
    drawerContent={CustomDrawer}
    initialRouteName="Screen1"
    screenOptions={{headerShown: true}}>
    <Drawer.Screen
      name="Sreen1"
      component={Screen1}
      options={{
        headerStyle: {
          backgroundColor: '#F4EDE8',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        drawerIcon: ({focused}) => (
          <Icon name="home" size={16} color={focused ? '#F4EDE8' : '#666360'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Screen2"
      component={Screen2}
      options={{
        headerStyle: {
          backgroundColor: '#F4EDE8',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
        },
        drawerIcon: ({focused}) => (
          <Icon name="box" size={16} color={focused ? '#F4EDE8' : '#666360'} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const Styled = StyleSheet.create({
  Header: {
    height: 250,
    backgroundColor: '#28262E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackColorDrawer: {
    backgroundColor: '#28262E',
  },
  BackColorItem: {
    backgroundColor: '#28262E',
  },
  Label: {
    fontSize: 16,
  },
});

export default DrawerNavigation;
