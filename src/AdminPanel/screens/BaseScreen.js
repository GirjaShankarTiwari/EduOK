import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import DrawerNavigation from '../../navigation/DrawerNavigation';

const BaseScreen = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#0467aa" />
      <DrawerNavigation />
    </View>
  );
};

export default BaseScreen;
