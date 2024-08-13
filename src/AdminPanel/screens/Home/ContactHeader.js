import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../../Constants/Color';
import Icons from '../../../Constants/Icons';
import {commonStyles} from '../../../Common/Styles/Styles';

const ContactHeader = () => {
  //const [message, setMessage] = useState('Hello Test Message');
  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${9198468478}';
    } else {
      phoneNumber = 'telprompt:${9198468478}';
    }

    Linking.openURL(phoneNumber);
  };
  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?text=hello&phone=9198468478');
  };
  return (
    <View style={styles.helpCardView}>
      <Text style={[commonStyles.smallTitle, {fontWeight: 500}]}>
        Need Help?
      </Text>
      <View style={[commonStyles.viewLine, {margin: 5}]}></View>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 10}}>
          <Text style={[commonStyles.smallTitle, {fontWeight: 500}]}>
            Mr.Priyesh Maurya
          </Text>
          <Text
            style={[
              commonStyles.smallTitle,
              {fontWeight: 400, color: Color.gray1},
            ]}>
            +91 9198468478
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={dialCall}
            style={{
              borderWidth: 1,
              borderColor: Color.primary1,
              borderRadius: 4,
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 6,
            }}>
            <Image
              source={Icons.callIcon}
              style={{
                height: 25,
                width: 25,
                marginRight: 8,
                tintColor: Color.primary,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openWhatsApp}
            style={{
              padding: 5,
              borderWidth: 1,
              borderColor: Color.primary1,
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Icons.whatsappIcon}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  helpCardView: {
    height: 100,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 6,
    borderColor: Color.primary1,
    borderWidth: 1,
    borderRadius: 7,
    elevation: 5,
  },
});
export default ContactHeader;
