import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from '../../../../../Constants/Icons';
import Color from '../../../../../Constants/Color';
import {commonStyles} from '../../../../../Common/Styles/Styles';

const FeeSettings = ({navigation}) => {
  return (
    <View style={[commonStyles.container, {paddingBottom: 10, paddingTop: 10}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('feeMasterList')}
        style={[styles.settingItem, commonStyles.roundedRectangleShape]}>
        <View style={styles.imageView}>
          <Image source={Icons.settings} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Fee Name List</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('classFee')}
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
          <Text style={commonStyles.largeTitle}>Class Fee</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('allSiblings')}
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.student} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Siblings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.special_case} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Special Case</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.settingItem,
          commonStyles.roundedRectangleShape,
          {marginTop: 8},
        ]}>
        <View style={styles.imageView}>
          <Image source={Icons.fee} style={{height: 40, width: 40}} />
        </View>
        <View style={{flex: 4, paddingLeft: 10}}>
          <Text style={commonStyles.largeTitle}>Fine Structure</Text>
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

export default FeeSettings;
