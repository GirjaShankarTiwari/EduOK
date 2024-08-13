import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Color from '../../../Constants/Color';
import Icons from '../../../Constants/Icons';
import {commonStyles} from '../../../Common/Styles/Styles';

const AdminClerkModules = ({clerkModules}) => {
  const navigation = useNavigation();

  const handleNavigation = item => {
    if (item.id == 1) {
      navigation.navigate('studentManagement');
    }
    if (item.id == 2) {
      navigation.navigate('reportAndPrintable');
    }
    if (item.module_name === 'Settings') {
      navigation.navigate('settings');
    }
    if (item.module_name === 'Help Desk') {
      navigation.navigate('helpDesk');
    }
  };

  return (
    <View style={styles.erpContentView}>
      <View style={styles.header}>
        <Text
          style={{
            color: Color.white,
            fontSize: 17,
            textAlign: 'center',
            fontWeight: 500,
          }}>
          Admin/Clerk Modules ({clerkModules.length})
        </Text>
      </View>
      <FlatList
        data={clerkModules}
        keyExtractor={(item, indx) => item.module_name + indx}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.itemContainer}
              onPress={() => handleNavigation(item)}>
              <View
                style={{
                  backgroundColor: Color.secondry,
                  borderRadius: 70,
                  padding: 10,
                  marginBottom: 16,
                  borderWidth: 3.5,
                  borderColor: Color.shyan,
                  elevation: 2,
                }}>
                <Image
                  source={{uri: item.icon_img}}
                  resizeMode="contain"
                  style={{
                    height: 60,
                    width: 60,
                    borderWidth: 1,
                  }}
                />
              </View>
              <Text
                style={[
                  commonStyles.largeTitlePrimaryDark,
                  {color: Color.black},
                ]}>
                {item.module_name}
              </Text>
            </TouchableOpacity>
          );
        }}
        numColumns={2} // Set the number of columns here
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 35,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: Color.secondry,
    paddingLeft: 16,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  erpContentView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    backgroundColor: Color.bgColor,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 6,
    borderColor: Color.primary1,
    borderWidth: 1,
    borderRadius: 7,
    elevation: 3,
  },

  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default AdminClerkModules;
