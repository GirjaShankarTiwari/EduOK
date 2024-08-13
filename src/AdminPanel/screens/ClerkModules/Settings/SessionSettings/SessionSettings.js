import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomSheetModal from '../../../../../Components/BottomSheetModal ';
import Icons from '../../../../../Constants/Icons';
import Color from '../../../../../Constants/Color';
import {Picker} from '@react-native-picker/picker';
import HTTPRequest from '../../../../../Utils/HTTPRequest';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {getClassWithStudentCount} from '../../../../../redux/Actions/GetClassWithStudentCountAction';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../../../Components/Loader';
import CustomButtonPrimaryColor from '../../../../../Components/CustomButtonPrimaryColor';

const stdListData = [
  {
    id: 1,
    name: 'Amrita Pandey (S055311)',
    father: 'OM Prakash',
    gender: 'Female',
    class_name: 'Play Group',
    section: 'A',
  },
  {
    id: 2,
    name: 'Arun Pandey (S035312)',
    father: 'Gyan Prakash',
    gender: 'Male',
    class_name: 'Play Group',
    section: 'A',
  },
  {
    id: 2,
    name: 'Arun Pandey (S035312)',
    father: 'Gyan Prakash',
    gender: 'Male',
    class_name: 'Play Group',
    section: 'A',
  },
  {
    id: 2,
    name: 'Arun Pandey (S035312)',
    father: 'Gyan Prakash',
    gender: 'Male',
    class_name: 'Play Group',
    section: 'A',
  },
];

const SessionSettings = ({navigation}) => {
  const gotoAddNewSession = () => {
    navigation.navigate('addUpcomingSession');
  };
  return (
    <View style={[commonStyles.container]}>
      <View style={{flex: 7, paddingTop: 10, backgroundColor: Color.bgColor}}>
        {stdListData.length ? (
          <FlatList
            data={stdListData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({item, index}) => {
              return (
                <View style={styles.settingItem}>
                  <View style={styles.stdinfo}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={commonStyles.largeTitle}>
                        Session Name :{' '}
                      </Text>
                      <Text style={commonStyles.largeTitle}>2023-2024</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={[
                          commonStyles.largeTitle,
                          {fontSize: 16, color: Color.gray1},
                        ]}>
                        Start Date :
                      </Text>
                      <Text
                        style={[
                          commonStyles.largeTitle,
                          {fontSize: 16, color: Color.gray1},
                        ]}>
                        2023-04-01
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={[
                          commonStyles.largeTitle,
                          {fontSize: 16, color: Color.gray1},
                        ]}>
                        End Date :
                      </Text>
                      <Text
                        style={[
                          commonStyles.largeTitle,
                          {fontSize: 16, color: Color.gray1},
                        ]}>
                        2024-03-31
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rollno,
                      index == 0 && {backgroundColor: Color.green},
                    ]}>
                    <Text
                      style={{
                        color: Color.white,
                        fontSize: 16,
                        fontWeight: 700,
                      }}>
                      {index == 0 ? 'Current' : 'Previous'}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        ) : null}
      </View>

      <View style={{flex: 0.8}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
            paddingHorizontal: 10,
            position: 'absolute',
            flexDirection: 'row',
            bottom: 2,
          }}>
          <CustomButtonPrimaryColor
            title="Add New Session"
            color={Color.white}
            bgColor={Color.primary}
            onPress={gotoAddNewSession}
            width="100%"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    width: '95%',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: Color.white,
    alignSelf: 'center',
  },
  stdinfo: {
    width: '100%',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopEndRadius: 8,
    borderWidth: 1.5,
    borderColor: Color.orange,
  },

  rollno: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Color.gray,
    height: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
});

export default SessionSettings;
