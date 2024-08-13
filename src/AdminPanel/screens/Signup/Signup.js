import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Color from '../../../Constants/Color';
import CustomButtonPrimaryColor from '../../../Components/CustomButtonPrimaryColor';
import {commonStyles} from '../../../Common/Styles/Styles';

const Signup = ({navigation}) => {
  const handleRegistration = () => {
    navigation.navigate('login');
  };
  return (
    <View
      style={[
        commonStyles.container,
        {backgroundColor: Color.primary4, padding: 8},
      ]}>
      <View style={styles.registrationGuid}>
        <Text style={{textAlign: 'center'}}>
          Please provides right information for technical support and training
          purpose.EduOK Team will contact you after registration for your
          trainging and services.
        </Text>
      </View>
      <View>
        <Text style={{marginTop: 10, fontWeight: 500}}>School Name</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="School Name" style={[styles.input]} />
        </View>
        <Text style={{marginTop: 10, fontWeight: 500}}>School Address</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="School Address" style={[styles.input]} />
        </View>
        <Text style={{marginTop: 10, fontWeight: 500}}>Country</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Country" style={[styles.input]} />
        </View>
        <Text style={{marginTop: 10, fontWeight: 500}}>State</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="State" style={[styles.input]} />
        </View>
        <Text style={{marginTop: 10, fontWeight: 500}}>Admin Name</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Admin Name" style={[styles.input]} />
        </View>
        <Text style={{marginTop: 10, fontWeight: 500}}>Admin Phone</Text>
        <View
          style={[
            styles.inputWrapper,
            {
              flexDirection: 'row',
            },
          ]}>
          <Text
            style={{
              alignSelf: 'center',
              paddingLeft: 10,
              height: 45,
              width: 55,
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              fontWeight: 500,
              textAlignVertical: 'center',
              backgroundColor: Color.primary3,
            }}>
            +91
          </Text>
          <TextInput
            placeholder="Admin Phone"
            keyboardType="phone-pad"
            style={[styles.input]}
          />
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <CustomButtonPrimaryColor
          title="Submit Details"
          color={Color.white}
          bgColor={Color.primary}
          onPress={handleRegistration}
          marginTop={0}
          width={'100%'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registrationGuid: {
    backgroundColor: Color.warning,
    padding: 8,
    borderRadius: 5,
    elevation: 2,
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    height: 45,
    backgroundColor: Color.white,
    width: '100%',
    borderRadius: 5,
    marginTop: 5,
    elevation: 2,
  },
  input: {
    paddingLeft: 12,
    fontSize: 16,
  },
});

export default Signup;
