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
import Icons from '../../../../Constants/Icons';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-virtualized-view';
import {commonStyles} from '../../../../Common/Styles/Styles';

const data = [
  {
    id: 1,
    name: 'Roll Number',
  },
  {
    id: 2,
    name: 'State Spacific Id',
  },
  {
    id: 3,
    name: 'Date of Birth',
  },
  {
    id: 4,
    name: 'Blood Group',
  },
  {
    id: 5,
    name: 'Aadhar Number',
  },
  {
    id: 6,
    name: 'Gender',
  },
  {
    id: 7,
    name: 'Mother Tongue',
  },
  {
    id: 8,
    name: 'Height and Weight',
  },
  {
    id: 9,
    name: 'RTE Student',
  },
  {
    id: 10,
    name: 'BPL Beneficiary',
  },
  {
    id: 11,
    name: 'Physical Disability',
  },
  {
    id: 12,
    name: 'Student PEN',
  },
];

const list = [
  {
    id: 1,
    name: 'Student Registration',
  },
  {
    id: 2,
    name: 'Siblings',
  },
  {
    id: 3,
    name: 'Promote Student \n(Into Next Session)',
  },
  {
    id: 4,
    name: 'Promote Transport Student \n(Into Next Session)',
  },
  {
    id: 5,
    name: 'Class Change \n(Current Session)',
  },
  {
    id: 6,
    name: 'Admission Query',
  },
  {
    id: 7,
    name: 'Registration Fee',
  },
];
const AdmissionDashboard = ({navigation}) => {
  const handleOnPressEvent = item => {
    if (item.id == 1) {
      navigation.navigate('addNewStudent');
    }
  };
  return (
    <ScrollView
      style={commonStyles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: Color.primary,
            justifyContent: 'center',
            alignItems: 'center',
            height: 120,
          }}>
          <Text
            style={[
              commonStyles.largeTitle,
              {fontSize: 21, fontWeight: 600, color: Color.white},
            ]}>
            30
          </Text>
          <Text
            style={[
              commonStyles.largeTitlePrimaryDark,
              {fontWeight: 500, fontSize: 28, color: Color.white},
            ]}>
            Student
          </Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 20,
              bottom: 35,
              borderWidth: 1,
              borderColor: Color.white,
              padding: 3,
              borderRadius: 5,
            }}>
            <Text
              style={[
                commonStyles.largeTitlePrimaryDark,
                {
                  fontWeight: 400,
                  fontSize: 12,
                  color: Color.white,
                },
              ]}>
              Summary
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: Color.primary3,
            marginTop: -20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <Text
            style={[
              commonStyles.largeTitlePrimaryDark,
              {
                fontWeight: 400,
                fontSize: 16,
                color: Color.black,
                position: 'absolute',
                top: 8,
                left: 10,
              },
            ]}>
            Manage Student Information
          </Text>
          <View style={styles.stdinfo}>
            <FlatList
              data={data}
              renderItem={({item, index}) => {
                return (
                  <LinearGradient
                    key={index}
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.5, y: 1.0}}
                    locations={[0, 0.5, 0.6]}
                    colors={['#fcebc8', '#fcebc8', '#fcebc8']}
                    style={styles.circleItem}>
                    <TouchableOpacity
                      style={{
                        height: 90,
                        width: 90,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={[
                          styles.buttonText,
                          {
                            fontWeight: 500,
                            justifyContent: 'center',
                            alignItems: 'center',
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                );
              }}
              numColumns={3}
            />
          </View>

          <View style={{marginTop: 10}}>
            <FlatList
              data={list}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.itemDesign}
                    onPress={() => handleOnPressEvent(item)}>
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
                    <View style={{marginLeft: 12}}>
                      <Text
                        style={[
                          commonStyles.largeTitle,
                          {textAlign: 'center'},
                        ]}>
                        {item.name}
                      </Text>
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
  container: {
    flex: 1,
  },
  buttonText: {
    color: Color.redColor,
    textAlign: 'center',
    fontSize: 12,
    margin: 4,
  },
  circleItem: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Color.lightWhite,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  stdinfo: {
    width: '95%',
    borderWidth: 1,
    borderColor: Color.white,
    backgroundColor: Color.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 35,
  },
  itemDesign: {
    height: 55,
    width: '95%',
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: Color.gray,
    paddingLeft: 10,
    backgroundColor: Color.white,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AdmissionDashboard;
