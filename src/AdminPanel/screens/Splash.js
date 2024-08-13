import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import React, {useEffect} from 'react';
import Icons from '../../Constants/Icons';
import Color from '../../Constants/Color';
import GradientActivityIndicator from '../../Components/GradientActivityIndicator ';
import LocalData from '../../Utils/LocalData';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    // Function to handle navigation after checking login status
    const checkLoginStatus = async () => {
      try {
        let userData = await LocalData.getUserInfo();
        let parseData = userData != null ? JSON.parse(userData) : null;
        const staff_id = parseData?.staff_id;
        if (staff_id) {
          navigation.replace('baseScreen');
        } else {
          navigation.replace('login');
        }
      } catch (error) {
        console.error('Failed to fetch login status', error);
        navigation.replace('Login');
      }
    };

    // Show splash screen for 2 seconds then check login status
    const timer = setTimeout(() => {
      checkLoginStatus();
    }, 2000); // Delay in milliseconds (2 seconds)

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0467aa" />
      <View style={styles.contentView}>
        <View style={styles.logoCircle}>
          <Animatable.Image
            source={Icons.logo}
            style={{height: 100, width: 100}}
            animation={'zoomIn'}
            duration={1400}
          />
        </View>

        <Text
          style={{
            color: Color.white,
            fontWeight: 700,
            fontSize: 25,
            margin: 8,
            textAlign: 'center',
          }}>
          EduOK School Management System
        </Text>
        <Text style={{color: Color.white, fontWeight: 400, fontSize: 18}}>
          Innovation of Education System
        </Text>
      </View>
      <GradientActivityIndicator
        size="large"
        colors={['#ff6e7f', '#bfe9ff']} // Define your gradient colors here
        style={styles.indicator}
        color={Color.primary}
      />
      <View style={styles.baseContainer}>
        <Text style={{fontSize: 21, color: Color.orange}}>developed By</Text>
        <Text
          style={{
            fontSize: 21,
            color: Color.orange,
            fontWeight: 700,
          }}>
          www.techmetrica.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
  },
  contentView: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Color.primaryDark,
  },
  logoCircle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    backgroundColor: Color.white,
    borderColor: Color.orange,
  },
  appTitle: {
    color: Color.white,
    fontWeight: 700,
    fontSize: 36,
  },
  appSlogan: {
    color: Color.white,
    fontWeight: 400,
    fontSize: 16,
  },
});

export default Splash;
