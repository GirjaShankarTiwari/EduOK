import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../../../Constants/Color';
import {commonStyles} from '../../../Common/Styles/Styles';

const AnnouncementHeader = announcement => {
  const rawStr = JSON.stringify(announcement);
  const decodedString = rawStr.replace(/\\u([\dA-F]{4})/gi, (match, group) => {
    return String.fromCharCode(parseInt(group, 16));
  });

  // Step 2: Remove escape sequences and HTML tags
  const cleanedString = decodedString
    .replace(/\\r\\n/g, ' ') // Replace newline characters with spaces
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\\/, '') // Remove remaining escape sequences
    .trim();
  return (
    <View style={styles.helpCardView}>
      <Text style={[commonStyles.smallTitle, {fontWeight: 500, margin: 6}]}>
        {cleanedString}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  helpCardView: {
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
    elevation: 2,
    margin: 6,
    borderColor: Color.primary1,
    borderWidth: 1,
    borderRadius: 7,
    elevation: 3,
  },
});
export default AnnouncementHeader;
