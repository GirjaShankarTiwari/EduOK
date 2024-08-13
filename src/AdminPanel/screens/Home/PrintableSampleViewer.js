import {View, Text, Image} from 'react-native';
import React from 'react';

const PrintableSampleViewer = ({route}) => {
  const {reportCardUri} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        resizeMode="contain"
        source={{uri: reportCardUri}}
        style={{height: '80%', width: '90%'}}
      />
    </View>
  );
};

export default PrintableSampleViewer;
