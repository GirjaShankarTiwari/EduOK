import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../Constants/Color';

const GradientActivityIndicator = ({size, colors, style, color}) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={colors}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <ActivityIndicator size={size || 'large'} color={color} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default GradientActivityIndicator;
