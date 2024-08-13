import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  SectionList,
} from 'react-native';
import React from 'react';

import Color from '../../../../../../Constants/Color';

import {commonStyles} from '../../../../../../Common/Styles/Styles';

import CustomButtonPrimaryColor from '../../../../../../Components/CustomButtonPrimaryColor';
import {ScrollView} from 'react-native-virtualized-view';
import Icons from '../../../../../../Constants/Icons';

const AllSiblings = ({navigation}) => {
  const sections = [
    {
      title: 'John Doe',
      data: [
        {
          rollNumber: '001',
          subjects: ['Hindi', 'English', 'Math'],
          siblings: [
            {name: 'Jane Doe', rollNumber: '002'},
            {name: 'Jim Doe', rollNumber: '003'},
          ],
        },
      ],
    },
    {
      title: 'Emily Smith',
      data: [
        {
          rollNumber: '004',
          subjects: ['Science', 'English'],
          siblings: [
            {name: 'Ella Smith', rollNumber: '005'},
            {name: 'Ethan Smith', rollNumber: '006'},
          ],
        },
      ],
    },
    {
      title: 'Michael Johnson',
      data: [
        {
          rollNumber: '007',
          subjects: ['Math', 'Science', 'English'],
          siblings: [{name: 'Mia Johnson', rollNumber: '008'}],
        },
      ],
    },
    {
      title: 'Michael Johnson',
      data: [
        {
          rollNumber: '007',
          subjects: ['Math', 'Science', 'English'],
          siblings: [{name: 'Mia Johnson', rollNumber: '008'}],
        },
      ],
    },
  ];
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Siblings</Text>
      <FlatList
        data={item.subjects}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={[
                styles.settingItem,
                commonStyles.roundedShapeGray,
                {marginTop: 8},
              ]}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Image
                    source={Icons.student}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: Color.primary2,
                      marginLeft: 8,
                    }}
                  />
                </View>
                <View style={styles.middleArea}>
                  <Text style={[commonStyles.smallTitle, {fontWeight: 700}]}>
                    Bardhman kaur(S0001)
                  </Text>

                  <Text
                    style={[
                      commonStyles.smallTitle,
                      {color: Color.gray1, fontSize: 16},
                    ]}>
                    Play Group : B (RollNo:08)
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: Color.primary5,
                    elevation: 2,
                    borderRadius: 25,
                    marginRight: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Icons.delete}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  const renderSectionHeader = ({section: {title}}) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
  return (
    <View style={[commonStyles.container, {backgroundColor: Color.bgColor}]}>
      <View style={{marginBottom: 60}}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item.rollNumber + index}
          renderItem={renderItem}
          //   renderSectionHeader={renderSectionHeader}
        />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
          position: 'absolute',
          bottom: 5,
        }}>
        <CustomButtonPrimaryColor
          title="Add More Siblings"
          color={Color.white}
          bgColor={Color.primary}
          width="95%"
          marginTop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Color.white,
    padding: 10,
    margin: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subjectText: {
    fontSize: 14,
    paddingLeft: 10,
  },
  siblingContainer: {
    paddingLeft: 10,
  },
  siblingText: {
    fontSize: 14,
    color: '#333',
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleArea: {
    flex: 4,
    paddingLeft: 10,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 4,
    paddingBottom: 4,
  },
});

export default AllSiblings;
