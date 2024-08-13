import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0467aa" barStyle="light-content" />
      <AppNavigator />
      {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
    </NavigationContainer>
  );
};

export default App;
