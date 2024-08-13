import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import Icons from '../../../Constants/Icons';
import Color from '../../../Constants/Color';

const SchoolDetailsHeader = ({schoolDetails}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '30%'}}>
        <View>
          <Image source={Icons.logo_place_holder} style={styles.applogo} />
        </View>
      </View>
      <View
        style={{width: '70%', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.appTitle}>
          {schoolDetails.school_name + '(' + schoolDetails.school_code + ')'}
        </Text>
        <Text style={styles.appSubTitle}>{schoolDetails.school_tag_line}</Text>
        <Text style={styles.appSubTitle}>{schoolDetails.school_address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Color.primary,
    height: Dimensions.get('window').height / 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appTitle: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
  },
  appSubTitle: {
    color: Color.white,
    fontSize: 13,
    textAlign: 'center',
  },
  applogo: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 5,
    borderColor: Color.lightgray,
    borderWidth: 2,
  },
});

export default SchoolDetailsHeader;
