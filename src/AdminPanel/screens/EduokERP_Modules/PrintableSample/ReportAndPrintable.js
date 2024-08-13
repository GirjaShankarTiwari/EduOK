import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import Color from '../../../../Constants/Color';
import Icons from '../../../../Constants/Icons';
import {ScrollView} from 'react-native-virtualized-view';
import {commonStyles} from '../../../../Common/Styles/Styles';

const reportList = [
  {
    id: 1,
    name: 'Student Due List',
  },
  {
    id: 2,
    name: 'Fee Pay Chart',
  },
];

const printableList = [
  {
    id: 1,
    name: 'Student Id Card',
  },
  {
    id: 2,
    name: 'Admission Form',
  },
  {
    id: 3,
    name: 'Admission Acknowledgement',
  },
  {
    id: 4,
    name: 'Demand Slip',
  },
  {
    id: 5,
    name: 'Fee Payment Notice',
  },
  {
    id: 6,
    name: 'Leaving Certificate',
  },
  {
    id: 7,
    name: 'Event Participant',
  },
  {
    id: 8,
    name: 'Appreciation Certificate',
  },
  {
    id: 9,
    name: 'Admit card',
  },
  {
    id: 10,
    name: 'Blank Admission Form',
  },
];
const ReportAndPrintable = () => {
  return (
    <ScrollView>
      <View style={commonStyles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#e27a04" />
        <Text style={[commonStyles.smallTitle, {textAlign: 'left', margin: 8}]}>
          Report List
        </Text>
        <View
          style={[
            commonStyles.roundedRectangleShape,
            {paddingTop: 5, paddingBottom: 5, borderColor: Color.orange},
          ]}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={reportList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={styles.itemDesign} key={index}>
                    <View
                      style={{
                        backgroundColor: Color.orange,
                        borderRadius: 25,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Icons.report}
                        style={{
                          height: 30,
                          width: 30,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 16}}>
                      <Text style={commonStyles.largeTitle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>

        <Text style={[commonStyles.smallTitle, {textAlign: 'left', margin: 8}]}>
          Printable List
        </Text>
        <View
          style={[
            commonStyles.roundedRectangleShape,
            {paddingTop: 5, paddingBottom: 5, borderColor: Color.orange},
          ]}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={printableList}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={styles.itemDesign} key={index}>
                    <View
                      style={{
                        backgroundColor: Color.orange,
                        borderRadius: 25,
                        height: 50,
                        width: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={Icons.report}
                        style={{
                          height: 30,
                          width: 30,
                        }}
                      />
                    </View>
                    <View style={{marginLeft: 16}}>
                      <Text style={commonStyles.largeTitle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemDesign: {
    height: 55,
    width: '93%',
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: Color.gray,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ReportAndPrintable;
