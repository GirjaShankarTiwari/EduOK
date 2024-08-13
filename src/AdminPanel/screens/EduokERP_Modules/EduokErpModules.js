import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Color from '../../../Constants/Color';
import Icons from '../../../Constants/Icons';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../../../Common/Styles/Styles';

const EduokErpModules = ({adminModules}) => {
  const navigation = useNavigation();

  const handleNavigation = item => {
    if (item.module_id == 'MDL038') {
      navigation.navigate('studentManagement');
    }
    if (item.module_id == 'MDL006') {
      navigation.navigate('reportAndPrintable');
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
          EduOk ERP(Super Admin Modules)
        </Text>
      </View>
      <FlatList
        data={adminModules}
        keyExtractor={(item, indx) => item.module_name + indx}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleNavigation(item)}>
              <View
                style={{
                  backgroundColor: Color.orange,
                  borderTopLeftRadius: 22,
                  borderBottomRightRadius: 22,
                  padding: 10,
                  marginBottom: 16,
                  borderWidth: 3,
                  borderColor: Color.darkGreen,
                }}>
                <Image
                  source={{uri: item.icon_img}}
                  resizeMode="contain"
                  style={{
                    height: 40,
                    width: 42,
                    borderWidth: 1,
                  }}
                />
              </View>
              <Text
                style={[
                  commonStyles.largeTitlePrimaryDark,
                  {
                    fontSize: 16,
                    color: Color.secondry,
                    fontFamily: 'Poppins_Italic',
                  },
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
    backgroundColor: Color.orange,
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

export default EduokErpModules;
