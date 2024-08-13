import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';

const DrawerItem = ({name, icon, props, navigation}) => {
  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };
  return (
    <TouchableOpacity
      onPress={() => {
        closeDrawer();
        props.navigation.navigate(navigation);
      }}
      style={{
        height: 45,
        justifyContent: 'center',
        marginBottom: 5,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={icon}
          style={{height: 20, width: 20, tintColor: Color.orange1}}
        />
        <Text
          style={{
            fontSize: 16,
            marginLeft: 14,
            color: Color.black,
            fontWeight: 450,
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;
