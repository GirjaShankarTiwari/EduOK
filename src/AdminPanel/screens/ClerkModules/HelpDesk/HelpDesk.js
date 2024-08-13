import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Color from '../../../../Constants/Color';
import {commonStyles} from '../../../../Common/Styles/Styles';
import Icons from '../../../../Constants/Icons';

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

const HelpDesk = ({navigation}) => {
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
                    <Text
                      style={[
                        commonStyles.largeTitle,
                        {color: Color.primary, fontWeight: 600, fontSize: 16},
                      ]}>
                      Mr.Priyesh Maurya (Director){' '}
                    </Text>
                    <Text
                      style={[
                        commonStyles.largeTitle,
                        {fontSize: 14, color: Color.gray1},
                      ]}>
                      (Hindi,English)
                    </Text>
                  </View>
                  <View style={[styles.bottombtn]}>
                    <TouchableOpacity
                      style={{
                        width: '45%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Icons.callIcon}
                        style={{
                          height: 26,
                          width: 26,
                          tintColor: Color.primary,
                        }}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          color: Color.black,
                          fontSize: 14,
                          marginLeft: 10,
                        }}>
                        +91 9198468478
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        height: 30,
                        width: 2,
                        backgroundColor: Color.white,
                        marginHorizontal: 2,
                      }}></View>
                    <TouchableOpacity
                      style={{
                        width: '45%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Icons.whatsappIcon}
                        style={{height: 26, width: 26}}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          color: Color.black,
                          fontSize: 14,
                          marginLeft: 10,
                        }}>
                        +91 9198468478
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        ) : null}
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

  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.lightGreen,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingVertical: 5,
    borderColor: Color.orange,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
});

export default HelpDesk;
