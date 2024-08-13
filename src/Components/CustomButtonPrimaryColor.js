import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';

const CustomButtonPrimaryColor = ({
  title,
  color,
  bgColor,
  onPress,
  width,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        backgroundColor: bgColor,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: marginTop,
      }}>
      <Text style={{color: color, fontSize: 16, fontWeight: 500}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonPrimaryColor;
