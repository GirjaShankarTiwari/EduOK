import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import DrawerHeader from '../CustomDrawer/DrawerHeader';
import Icons from '../Constants/Icons';
import DrawerItem from '../CustomDrawer/DrawerItem';
import Color from '../Constants/Color';
import Strings from '../Constants/Strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerLayout = props => {
  const navigation = useNavigation();

  const logout = () => {
    Alert.alert('Hold on!', 'Are you sure you want to Logout?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          props.navigation.closeDrawer();
          AsyncStorage.clear();
          navigation.navigate('login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <DrawerHeader />
      <ScrollView>
        <View
          style={{
            flex: 4,
            margin: 10,
            padding: 10,
            elevation: 2,
          }}>
          <DrawerItem
            name={Strings.SCHOOL_MANAGEMENT}
            icon={Icons.student}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.REPORT_AND_PRINTABLE}
            icon={Icons.report}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.SCHOOL_PROFILE}
            icon={Icons.school}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.SETTINGS}
            icon={Icons.settings}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.REVENUE}
            icon={Icons.fee}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.STAFF}
            icon={Icons.staff}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.MANAGE}
            icon={Icons.holiday}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.USER_MATRIX}
            icon={Icons.app_user}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.SECURITY}
            icon={Icons.security}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.PRIVILEGE}
            icon={Icons.privilege}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.LEAVE}
            icon={Icons.leave}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.SUGGETION_AND_FEEDBACK}
            icon={Icons.feedback}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.SETTLEMENT}
            icon={Icons.homework}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.ADMIN}
            icon={Icons.admin}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.MY_ACCOUNT}
            icon={Icons.logo}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.OFFER_ZONE}
            icon={Icons.logo}
            props={props}
            navigation={'home'}
          />
          <DrawerItem
            name={Strings.EDUOK_PRODUCT}
            icon={Icons.logo}
            props={props}
            navigation={'home'}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{backgroundColor: Color.orange, elevation: 2}}
        onPress={() => {
          logout();
        }}>
        <Text
          style={{
            fontWeight: 500,
            margin: 10,
            textAlign: 'center',
            color: Color.white,
          }}>
          LOG OUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerLayout;
