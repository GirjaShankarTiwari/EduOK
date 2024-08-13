import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import Icons from '../../../../Constants/Icons';
import Color from '../../../../Constants/Color';
import CustomButtonPrimaryColor from '../../../../Components/CustomButtonPrimaryColor';
import {commonStyles} from '../../../../Common/Styles/Styles';

const data = [
  {
    id: 1,
    name: 'Print Admission Form',
  },
  {
    id: 2,
    name: 'Acknowledgement',
  },
];

const registerAnother = navigation => {
  navigation.navigate('addNewStudent');
};

const RegistrationSuccess = ({route, navigation}) => {
  const {enrollment_no} = route.params;
  return (
    <View style={[commonStyles.container, {paddingBottom: 10, paddingTop: 10}]}>
      <View style={{alignSelf: 'center', margin: 10}}>
        <Text
          style={[
            commonStyles.largeTitle,
            {fontWeight: 'bold', marginBottom: 5},
          ]}>
          Student Registered Successfully
        </Text>
        <Text style={commonStyles.smallTitle}>
          Enrollment No: {enrollment_no}
        </Text>
      </View>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={[
                  styles.settingItem,
                  commonStyles.roundedRectangleShape,
                ]}>
                <View
                  style={{
                    backgroundColor: Color.primary,
                    height: 70,
                    width: 70,
                    flex: 1.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                  }}>
                  <Image
                    source={Icons.printer}
                    style={{height: 40, width: 40}}
                  />
                </View>
                <View style={{flex: 4, paddingLeft: 10}}>
                  <Text style={commonStyles.largeTitle}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      ) : null}

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          margin: 5,
          backgroundColor: Color.white,
          position: 'absolute',
          bottom: 0,
          width: '97%',
        }}>
        <CustomButtonPrimaryColor
          title="Register Another"
          color={Color.white}
          bgColor={Color.primary}
          onPress={() => registerAnother(navigation)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    width: '95%',
    height: 70,
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default RegistrationSuccess;
