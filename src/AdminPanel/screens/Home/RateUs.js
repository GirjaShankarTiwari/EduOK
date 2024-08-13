import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icons from '../../../Constants/Icons';
import Color from '../../../Constants/Color';
import {commonStyles} from '../../../Common/Styles/Styles';

const RateUs = () => {
  return (
    <View style={styles.askQuestion}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flex: 8,
        }}>
        <Text style={[commonStyles.largeTitle, {fontWeight: 500}]}>
          Rate Us
        </Text>
        <Text
          style={[
            commonStyles.largeTitle,
            {fontWeight: 400, marginLeft: 16, color: Color.gray1},
          ]}>
          ☆☆☆☆☆
        </Text>
      </View>
      <View style={{flex: 2}}></View>
      <TouchableOpacity style={styles.questNext}>
        <Image
          source={Icons.nextArrow}
          style={{height: 20, width: 20, tintColor: Color.primary}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questNext: {
    height: 43,
    width: 43,
    marginRight: 0.4,
    borderWidth: 2,
    borderColor: Color.primary1,
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
    borderRadius: 25,
    elevation: 5,
  },
});

export default RateUs;
