import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icons from '../Constants/Icons';
import Color from '../Constants/Color';
import Strings from '../Constants/Strings';

const DrawerHeader = () => {
  return (
    <View
      style={{
        backgroundColor: Color.orange,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
      }}>
      <View style={styles.logoCircle}>
        <Image source={Icons.logo} style={{height: 80, width: 80}} />
      </View>
      <Text
        style={{
          color: Color.white,
          fontWeight: 400,
          fontSize: 16,
          textAlign: 'center',
          marginTop: 8,
        }}>
        {Strings.EDUOK_SCHOOL_MANAGEMENT_SYSTEM}
      </Text>
      <Text style={{color: Color.white, fontWeight: 400, fontSize: 12}}>
        {Strings.INNOVATION_OF_Education_System}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoCircle: {
    height: 100,
    width: 100,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    marginTop: 16,
    backgroundColor: Color.white,
    borderColor: Color.primary3,
  },
});

export default DrawerHeader;
