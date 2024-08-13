import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../../../../Constants/Color';
import Icons from '../../../../Constants/Icons';

const PrintableHeader = () => {
  return (
    <View style={styles.header}>
      <Text
        style={{
          color: Color.white,
          textAlign: 'center',
          fontWeight: 600,
          alignSelf: 'center',
          flex: 5,
          fontSize: 16,
        }}>
        EduOk Printable Sample
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity style={styles.questNext}>
          <Image source={Icons.nextArrow} style={{height: 18, width: 18}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 35,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: Color.orange,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questNext: {
    height: 30,
    width: 30,
    marginRight: 0.4,
    borderWidth: 2,
    borderColor: Color.white,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 3,
  },
});

export default PrintableHeader;
