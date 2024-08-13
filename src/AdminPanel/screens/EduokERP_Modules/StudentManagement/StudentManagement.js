import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../../../../Constants/Color';
import Icons from '../../../../Constants/Icons';
import CustomButtonPrimaryColor from '../../../../Components/CustomButtonPrimaryColor';
import {commonStyles} from '../../../../Common/Styles/Styles';

const StudentManagement = ({navigation}) => {
  const handleOnPressEvent = () => {
    navigation.navigate('admissionDashboard');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: Color.primary}}>
        <View style={styles.askQuestion}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flex: 8,
            }}>
            <Text style={[commonStyles.largeTitle, {fontWeight: 500}]}>
              Session:
            </Text>
            <Text
              style={[
                commonStyles.smallTitle,
                {fontWeight: 400, color: Color.primaryDark, marginLeft: 10},
              ]}>
              2023-2024
            </Text>
          </View>
          <View style={{flex: 2}}></View>
          <TouchableOpacity style={styles.questNext}>
            <Image source={Icons.nextArrow} style={{height: 20, width: 20}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              height: 90,
              backgroundColor: Color.white,
              width: '95%',
              padding: 10,
              elevation: 3,
              borderRadius: 5,
              marginTop: 8,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Icons.student}
                style={{height: 55, width: 55, tintColor: Color.primary}}
              />
            </View>

            <View
              style={{
                flex: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  commonStyles.largeTitle,
                  {fontSize: 21, fontWeight: 500},
                ]}>
                Total Student
              </Text>
              <Text
                style={[
                  commonStyles.largeTitlePrimaryDark,
                  {fontWeight: 600, fontSize: 28},
                ]}>
                39
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2.2,
          backgroundColor: Color.white,
          marginTop: -30,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            position: 'absolute',
            marginTop: -25,
          }}>
          <TouchableOpacity style={styles.activeCard}>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                styles.activeInActiveTitle,
              ]}>
              Active
            </Text>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                {color: Color.white, fontSize: 25, fontWeight: 500},
              ]}>
              39
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inActiveCard}>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                styles.activeInActiveTitle,
              ]}>
              InActive
            </Text>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                {color: Color.white, fontSize: 25, fontWeight: 500},
              ]}>
              0
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.delistedCard}>
          <View>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                {color: Color.white, fontWeight: 500},
              ]}>
              DeListed Student
            </Text>
            <Text
              style={[
                commonStyles.smallTitle,
                {color: Color.white, margin: 8},
              ]}>
              (Prevent student from login in application althought student data
              is safe available in application as per active or inactive case)
            </Text>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                {color: Color.white, fontWeight: 500, fontSize: 25},
              ]}>
              2
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            margin: 6,
            backgroundColor: Color.white,
            position: 'absolute',
            bottom: 0,
            width: '97%',
          }}>
          <CustomButtonPrimaryColor
            title="Add New Student"
            color={Color.white}
            bgColor={Color.primary}
            onPress={handleOnPressEvent}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  delistedCard: {
    backgroundColor: Color.warning,
    marginTop: '25%',
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
  questNext: {
    height: 43,
    width: 43,
    marginRight: 0.4,
    backgroundColor: Color.primary,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  askQuestion: {
    height: 45,
    shadowColor: '#000',
    justifyContent: 'space-between',
    paddingLeft: 16,
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginLeft: 6,
    marginRight: 6,
    marginTop: 4,
    marginBottom: 2,
    borderColor: Color.primary1,
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
  },
  activeCard: {
    height: 90,
    width: '45%',
    backgroundColor: Color.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.lightgray,
  },
  inActiveCard: {
    height: 90,
    width: '45%',
    backgroundColor: Color.orange1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.lightgray,
  },
  activeInActiveTitle: {
    color: Color.white,
    fontSize: 25,
    fontWeight: 500,
    fontStyle: 'italic',
  },
});

export default StudentManagement;
