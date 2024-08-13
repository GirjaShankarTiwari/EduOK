import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import Color from '../../../../../Constants/Color';
import Icons from '../../../../../Constants/Icons';
import {Switch} from 'react-native-paper';

const FeeReceiptSettings = () => {
  const [showCollectorName, setShowCollectorName] = React.useState(false);
  const [showBusPoint, setShowBusPoint] = React.useState(false);
  const [showCurrentDue, setShowCurrentDue] = React.useState(false);
  const [parentsCopy, setParentsCopy] = React.useState(false);
  const [schoolCopy, setSchoolCopy] = React.useState(false);
  const [showTotalDue, setShowTotalDue] = React.useState(false);

  return (
    <View
      style={[
        commonStyles.container,
        {paddingBottom: 10, paddingTop: 10, backgroundColor: Color.bgColor},
      ]}>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>Show Collector Name</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>Show Bus Point</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>Show Current Due</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>Parents Copy</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>School Copy</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={commonStyles.largeTitle}>Show Total Due</Text>
        <Switch
          color={Color.primary}
          style={{width: 60}}
          value={showCollectorName}
          onValueChange={() => setShowCollectorName(!showCollectorName)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    width: '95%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.7,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 10,
    backgroundColor: Color.white,
    borderColor: Color.gray,
    marginBottom: 10,
  },
});

export default FeeReceiptSettings;
