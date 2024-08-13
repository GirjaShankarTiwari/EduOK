import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../../../../Constants/Icons';
import Color from '../../../../Constants/Color';
import {commonStyles} from '../../../../Common/Styles/Styles';

const Settings = ({navigation}) => {
  return (
    <View style={[commonStyles.container, {paddingBottom: 10, paddingTop: 10}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('classSettings')}
        style={[styles.settingItem, commonStyles.roundedRectangleShape]}>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('feeSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.fee} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Fee Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('subjectSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.subjects} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Subjects Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('feeReceiptSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.fee} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Fee Receipt Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('departmentSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.department} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Department Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('rollNumberManagement')}
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
          <Text style={commonStyles.largeTitle}>Roll Number Management</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('sessionSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.settings} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Session Settings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('boardMediumSettings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.settings} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Board Medium Settings</Text>
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

export default Settings;
