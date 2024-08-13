import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useEffect} from 'react';
import Color from '../Constants/Color';
import {commonStyles} from '../Common/Styles/Styles';
import Icons from '../Constants/Icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const CustomToast = ({type, message, visible}) => {
  const Yvalue = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      //go up
      Yvalue.value = withTiming(-150, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });

      setTimeout(() => {
        Yvalue.value = withTiming(150, {
          duration: 300,
          easing: Easing.in(Easing.ease),
        });
      }, 3000);

      //go down
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: Yvalue.value}],
    };
  });

  return (
    <Animated.View style={[styles.animatedToast, animatedStyle]}>
      <View
        style={[
          styles.sideView,
          {
            backgroundColor:
              type == 'SUCCESS'
                ? '#5ab849'
                : type == 'ERROR'
                ? '#eb604d'
                : type == 'WARNING'
                ? '#ffd53d'
                : '#7398dd',
          },
        ]}></View>
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              type == 'SUCCESS'
                ? '#5ab849'
                : type == 'ERROR'
                ? '#eb604d'
                : type == 'WARNING'
                ? '#ffd53d'
                : '#7398dd',
          },
        ]}>
        <Image
          source={
            type == 'SUCCESS'
              ? Icons.checked
              : type == 'ERROR'
              ? Icons.cross
              : type == 'WARNING'
              ? Icons.warning
              : Icons.info
          }
          style={styles.icon}
        />
      </View>
      <Text style={[commonStyles.smallTitle, {marginLeft: 16, fontSize: 16}]}>
        {message}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedToast: {
    width: Dimensions.get('window').width - 20,
    height: 65,
    backgroundColor: Color.white,
    elevation: 5,
    shadowColor: Color.black,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {x: 5, y: 0},
    position: 'absolute',
    bottom: -70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    zIndex: 1000,
  },
  circle: {
    height: 34,
    width: 34,
    borderRadius: 17,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideView: {width: 7, height: '100%'},
  icon: {height: 20, width: 20},
});

export default CustomToast;
