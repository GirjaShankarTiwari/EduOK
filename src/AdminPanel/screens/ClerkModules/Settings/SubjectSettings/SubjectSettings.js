import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import Color from '../../../../../Constants/Color';
import Icons from '../../../../../Constants/Icons';

const SubjectSettings = () => {
  return (
    <View style={[commonStyles.container, {paddingBottom: 10, paddingTop: 10}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('classSettings')}
        style={[styles.settingItem, commonStyles.roundedRectangleShape]}>
        <View style={styles.imageView}>
          <Image source={Icons.subjects} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Subject Master List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('feeSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image
            source={Icons.class_settings}
            style={{height: 40, width: 40}}
          />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Class Settings</Text>
        </View>
      </TouchableOpacity>
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
  imageView: {
    backgroundColor: Color.primary,
    height: 70,
    width: 70,
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default SubjectSettings;
