import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import Color from '../../../../Constants/Color';
import PrintableHeader from './PrintableHeader';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../../../../Common/Styles/Styles';

const EduokPrintableSample = ({printableSample}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpCardView}>
      <PrintableHeader />
      <View
        style={{
          height: '85%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        {printableSample.length ? (
          <FlatList
            data={printableSample}
            keyExtractor={(item, indx) => item.sample_id + indx}
            horizontal={true}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('printableSampleViewer', {
                      reportCardUri: item.image_url,
                    });
                  }}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                    width: 150,
                    borderWidth: 0.4,
                    backgroundColor: Color.white,
                    elevation: 3,
                    margin: 8,
                    marginBottom: 8,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={{uri: item.image_url}}
                    style={styles.printCard}
                  />
                  <Text style={commonStyles.smallTitle}>
                    {item.sample_name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  helpCardView: {
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.white,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 6,
    borderColor: Color.orange,
    borderWidth: 1,
    borderRadius: 7,
    elevation: 5,
  },
  printCard: {
    height: 150,
    width: '70%',
    elevation: 3,
    margin: 10,
    borderRadius: 4,
  },
});
export default EduokPrintableSample;
