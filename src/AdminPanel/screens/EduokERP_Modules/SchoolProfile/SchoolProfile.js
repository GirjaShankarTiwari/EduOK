import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../../../Constants/Color';
import Icons from '../../../../Constants/Icons';
import {commonStyles} from '../../../../Common/Styles/Styles';

const SchoolProfile = () => {
  return (
    <View style={[commonStyles.container, {backgroundColor: Color.primary}]}>
      <Text
        style={[
          commonStyles.largeTitlePrimaryDark,
          {color: Color.yellow, fontWeight: 700, fontSize: 21, margin: 10},
        ]}>
        School Profile
      </Text>
      <TouchableOpacity
        style={[styles.cameraBtn, {top: 35, right: 20, borderRadius: 5}]}>
        <Image
          source={Icons.edit}
          style={{
            height: 16,
            width: 16,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          height: 200,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity style={styles.cameraBtn}>
          <Image
            source={Icons.camera}
            style={{
              height: 16,
              width: 16,
            }}
          />
        </TouchableOpacity>
        <View style={styles.avatarCircle}>
          <Image
            source={Icons.logo_place_holder}
            style={{height: 115, width: 115, borderRadius: 60}}
          />
        </View>
      </View>

      <View
        style={{
          margin: 5,
          borderRadius: 5,
          borderColor: Color.lightgray,
          padding: 8,
          backgroundColor: Color.primary,
          elevation: 2,
        }}>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 500},
          ]}>
          School Code:11
        </Text>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 400, fontSize: 16},
          ]}>
          Estb Year:2022
        </Text>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 400, fontSize: 16},
          ]}>
          Reg No:7442
        </Text>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 400, fontSize: 16},
          ]}>
          Udise No:xxxx
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 5,
          borderColor: Color.lightgray,
          padding: 8,
          backgroundColor: Color.primary1,
          elevation: 2,
        }}>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 500},
          ]}>
          Sarswati Public School
        </Text>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.yellow, fontWeight: 400, fontSize: 16},
          ]}>
          All's well thats done well
        </Text>
        <Text
          style={[
            commonStyles.largeTitlePrimaryDark,
            {color: Color.white, fontWeight: 500},
          ]}>
          Teachers colony Chatt POKHAR, PF69+J8C,Bihar 854301,India
        </Text>
      </View>
      <View
        style={{
          margin: 5,
          borderRadius: 5,
          borderColor: Color.lightgray,
          padding: 8,
          backgroundColor: Color.lightgray,
          elevation: 2,
        }}>
        <Text
          style={[commonStyles.largeTitlePrimaryDark, {color: Color.primary}]}>
          Official Contact1: 91655667778
        </Text>
        <Text
          style={[commonStyles.largeTitlePrimaryDark, {color: Color.primary}]}>
          Official Contact2: 91991918188
        </Text>
        <Text
          style={[commonStyles.largeTitlePrimaryDark, {color: Color.primary}]}>
          Official Email: xyz@gmail.com
        </Text>
        <Text
          style={[commonStyles.largeTitlePrimaryDark, {color: Color.primary}]}>
          Website: www.eduokerp.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarCircle: {
    height: 120,
    width: 120,
    borderWidth: 2.5,
    borderColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 60,
  },
  cameraBtn: {
    height: 30,
    width: 30,
    bottom: 30,
    right: 50,
    borderWidth: 2,
    borderColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    padding: 10,
  },
});

export default SchoolProfile;
