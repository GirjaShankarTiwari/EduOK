import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CustomButtonPrimaryColor from '../../../Components/CustomButtonPrimaryColor';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HTTPRequest from '../../../Utils/HTTPRequest';
import LocalData from '../../../Utils/LocalData';
import Color from '../../../Constants/Color';
import Icons from '../../../Constants/Icons';
import {commonStyles} from '../../../Common/Styles/Styles';
import CustomToast from '../../../Components/CustomToast';
import * as Animatable from 'react-native-animatable';
const AnimatableLayout = Animatable.createAnimatableComponent(View);

const Stack = createNativeStackNavigator();
const Login = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [visible, setVisible] = useState(false);

  const showCustomToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const validate = (username, password) => {
    let valid = true;
    let errors = {};

    if (!username) {
      errors.username = 'User Id is required';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    } else if (password.length < 3) {
      errors.password = 'Password must be at least 3 characters';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = async () => {
    setLoading(true);
    setErrors(null);
    const systemCode = '11';
    const versionCode = '115';

    if (validate(userId, password)) {
      try {
        const payload = `&user_id=${userId}&password=${password}&system_code=${systemCode}&version_code=${versionCode}`;
        loginApi(payload);
      } catch (error) {
        console.error(error);
        setErrors('Login Failed. Please check your credentials and try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const loginApi = payload => {
    // console.log({payload});
    HTTPRequest.staffLogin(payload)
      .then(response => {
        setLoading(false);
        const api_status = response?.data?.api_status;
        console.log(api_status);
        if (api_status == 'OK') {
          LocalData.setUserInfo(response?.data?.staff[0]);
          navigation.navigate('baseScreen');
          showCustomToast();
        } else {
          Alert.alert('Login Failed', 'User id OR password is incorrect!!!');
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        Alert.alert('Login Failed', 'User id OR password is incorrect!!!');
      });
  };
  const handleSchoolRegis = () => {
    navigation.navigate('signup');
  };

  return (
    <View
      style={[
        commonStyles.container,
        {
          backgroundColor: Color.primary,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <StatusBar barStyle="light-content" backgroundColor="#0467aa" />
      <AnimatableLayout
        style={styles.loginContent}
        animation={'zoomIn'}
        duration={1400}>
        <View style={[styles.logoCircle, {marginBottom: 16}]}>
          <Animatable.Image
            source={Icons.logo}
            style={{height: 100, width: 100}}
            animation={'zoomIn'}
            duration={1400}
          />
        </View>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.lightgray, fontWeight: 700},
          ]}>
          User Login
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter User Id"
            value={userId}
            onChangeText={txt => setUserId(txt)}
            style={[styles.input]}
          />
        </View>
        {errors.username && <Text style={styles.error}>{errors.username}</Text>}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={txt => setPassword(txt)}
            style={[styles.input]}
          />
        </View>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        <TouchableOpacity
          style={{alignSelf: 'flex-start'}}
          animation={'zoomIn'}
          duration={1400}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <CustomButtonPrimaryColor
          title="Login"
          color={Color.lightgray}
          bgColor={Color.orange1}
          onPress={handleLogin}
          width={'100%'}
          marginTop={16}
        />
        <CustomButtonPrimaryColor
          title="New School Registration"
          color={Color.lightgray}
          bgColor={Color.primaryDark}
          onPress={handleSchoolRegis}
          width={'100%'}
          marginTop={16}
        />
      </AnimatableLayout>
      <CustomToast
        type={'SUCCESS'}
        message="Login Successful"
        visible={visible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

  error: {
    color: Color.warning,
    alignSelf: 'flex-start',
  },
  forgotPass: {
    fontSize: 16,
    color: Color.lightgray,
    padding: 4,
    marginTop: 4,
  },
  inputWrapper: {
    height: 45,
    backgroundColor: Color.white,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    paddingLeft: 12,
    fontSize: 16,
  },
  loginContent: {
    backgroundColor: Color.primary1,
    padding: 12,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    paddingBottom: 20,
  },
});

export default Login;
