import {View, Text} from 'react-native';
import React from 'react';

import Home from '../AdminPanel/screens/Home/Home';
import Color from '../Constants/Color';
import CustomDrawerLayout from '../CustomDrawer/CustomDrawerLayout';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerLayout {...props} />}>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{
          headerShown: true,
          title: 'Super Admin',
          headerTintColor: Color.white,
          headerStyle: {backgroundColor: Color.primary},
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
