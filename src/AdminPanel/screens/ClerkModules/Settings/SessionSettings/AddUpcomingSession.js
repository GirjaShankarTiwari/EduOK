import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import Color from '../../../../../Constants/Color';
import {Icon} from 'react-native-paper';
import Icons from '../../../../../Constants/Icons';

const AddUpcomingSession = () => {
  return (
    <View style={[commonStyles.container, {backgroundColor: Color.bgColor}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, color: Color.gray1}}>
          Session Start Date
        </Text>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: Color.gray1,
            height: 38,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text
            style={{paddingHorizontal: 20, fontSize: 16, color: Color.black}}>
            2024-04-01
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Color.primary,
              height: 38,
              justifyContent: 'center',
              paddingHorizontal: 8,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <Image
              source={Icons.calendar}
              style={{height: 26, width: 26}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, color: Color.gray1}}>Session End Date</Text>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: Color.gray1,
            height: 38,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text
            style={{paddingHorizontal: 20, fontSize: 16, color: Color.black}}>
            2025-03-31
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: Color.primary,
              height: 38,
              justifyContent: 'center',
              paddingHorizontal: 8,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <Image
              source={Icons.calendar}
              style={{height: 26, width: 26}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, color: Color.gray1}}>Session Name</Text>
        <View
          style={{
            borderWidth: 0.7,
            borderColor: Color.gray1,
            height: 38,
            width: '48.5%',
            backgroundColor: Color.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 16, color: Color.white}}>2024-2025</Text>
        </View>
      </View>
      <Text
        style={{fontSize: 16, color: Color.gray1, margin: 10, fontWeight: 700}}>
        Notes :
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: Color.gray1,
          marginHorizontal: 10,
          padding: 10,
          borderWidth: 1.5,
          borderColor: Color.orange,
          borderRadius: 4,
        }}>
        All data such as Board,Medium,Class Fee,Structure,Subjects will be
        automatically copied from previous session to new session.If you want
        any new changes in new session ,you can do it in Settings Module.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AddUpcomingSession;
