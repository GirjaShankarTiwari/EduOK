import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomSheetModal from '../../../../../Components/BottomSheetModal ';
import Icons from '../../../../../Constants/Icons';
import Color from '../../../../../Constants/Color';
import {Picker} from '@react-native-picker/picker';
import HTTPRequest from '../../../../../Utils/HTTPRequest';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import {useDispatch, useSelector} from 'react-redux';
import {getClassWithStudentCount} from '../../../../../redux/Actions/GetClassWithStudentCountAction';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../../../Components/Loader';
import CustomButtonPrimaryColor from '../../../../../Components/CustomButtonPrimaryColor';

const feeData = [
  {
    id: 1,
    feeType: 'Tuition Fee',
    amount: 400,
    time: 'Monthly (12 Time)',
    applicableMonths: [
      {
        id: 1,
        month: 'Apr',
        date: '2023-04',
      },
      {
        id: 2,
        month: 'May',
        date: '2023-05',
      },
      {
        id: 2,
        month: 'Jun',
        date: '2023-06',
      },
    ],
  },
  {
    id: 1,
    feeType: 'Admission Fee',
    amount: 500,
    time: 'Monthly (12 Time)',
    applicableMonths: [
      {
        id: 1,
        month: 'Apr',
        date: '2023-04',
      },
    ],
  },
  {
    id: 1,
    feeType: 'Exam Fee',
    amount: 200,
    time: 'Ternary (3 Time)',
    applicableMonths: [
      {
        id: 1,
        month: 'July',
        date: '2023-07',
      },
      {
        id: 2,
        month: 'Nov',
        date: '2023-11',
      },
      {
        id: 2,
        month: 'Feb',
        date: '2024-02',
      },
    ],
  },
];

const ClassFee = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [boardId, setBoardId] = useState('');
  const [mediumId, setMediumId] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [boardData, setBoardData] = useState([]);
  const [mediumsData, setMediumsData] = useState([]);
  const [classData, setClasssData] = useState([]);
  const [student_count, setStudent_count] = useState([]);
  const [allSection, setAllsection] = useState([]);
  const [classWithStdCount, setClassWithStdCount] = useState([]);
  const [clsWithStdCountAndSection, setClsWithStdCountAndSection] = useState(
    [],
  );

  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      dispatch(getClassWithStudentCount());
    }
  }, [isFocused]);

  const data = useSelector(state => state.getClassWithStudentCountData);

  useEffect(() => {
    const fetchData = async () => {
      if (data?.data?.api_status === 'OK') {
        const {
          board,
          medium,
          class: classData,
          student_count,
          all_section,
        } = data?.data?.data;

        setBoardData(board);
        setMediumsData(medium);
        setClasssData(classData);
        setStudent_count(student_count);
        setAllsection(all_section);

        const classesWithStudentCount = getTotalStudents(
          classData,
          student_count,
        );

        if (classesWithStudentCount.length !== 0) {
          setClassWithStdCount(classesWithStudentCount);
        }

        // Create a mapping of class_id to sections
        const sectionMap = all_section.reduce((map, section) => {
          if (!map[section.class_id]) {
            map[section.class_id] = [];
          }
          map[section.class_id].push(section.section_name);
          return map;
        }, {});

        // Add section_name to array1
        const classesWithSections = classesWithStudentCount.map(item => ({
          ...item,
          section_name: sectionMap[item.class_id] || [],
        }));

        if (classesWithSections.length !== 0) {
          setClsWithStdCountAndSection(classesWithSections);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [data, navigation]);

  const getTotalStudents = (classData, studentCount) => {
    return classData.map(cls => {
      const studentData = studentCount.find(sc => sc.class_id === cls.class_id);
      return {
        ...cls,
        total_student: studentData ? studentData.total_student : '0', // Default to "0" if no match found
      };
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddClassFee = () => {
    navigation.navigate('addClassFee');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={[commonStyles.container, {backgroundColor: Color.primary5}]}>
      <View style={{flex: 1.2}}>
        <TouchableOpacity
          onPress={openModal}
          style={[
            styles.pickerContainer,
            {
              height: 40,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
              justifyContent: 'center',
              backgroundColor: Color.white,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <Text style={commonStyles.largeTitle}>Session:2023-2024</Text>
            <Image
              source={Icons.calendar}
              style={{height: 25, width: 25, tintColor: Color.primary}}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
          }}>
          <View
            style={[
              styles.pickerContainer,
              {
                backgroundColor: Color.white,
                height: 40,
                justifyContent: 'center',
                flex: 2,
              },
            ]}>
            <Picker
              selectedValue={boardId}
              style={styles.picker}
              onValueChange={itemValue => setBoardId(itemValue)}>
              <Picker.Item
                label="Select Board"
                value={null}
                style={{fontSize: 14}}
              />
              {boardData.map(item => (
                <Picker.Item
                  key={item.board_id}
                  label={item.board_name}
                  value={item.board_id}
                  style={{fontSize: 14}}
                />
              ))}
            </Picker>
          </View>
          <View
            style={[
              styles.pickerContainer,
              {
                backgroundColor: Color.white,
                height: 40,
                justifyContent: 'center',
                flex: 2,
              },
            ]}>
            <Picker
              selectedValue={mediumId}
              style={styles.picker}
              onValueChange={itemValue => setMediumId(itemValue)}>
              <Picker.Item
                label="Select Medium"
                value={null}
                style={{fontSize: 14}}
              />
              {mediumsData.map(item => (
                <Picker.Item
                  key={item.medium_id}
                  label={item.medium_name}
                  value={item.medium_id}
                  style={{fontSize: 14}}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={{flex: 7}}>
        <Text style={[commonStyles.largeTitle, {marginLeft: 8, marginTop: 8}]}>
          Applicable Fee's
        </Text>
        <FlatList
          data={feeData}
          keyExtractor={(item, index) => item.feeType + index}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.settingItem,
                  commonStyles.roundedShapeGray,
                  {marginTop: 8},
                ]}>
                <View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      paddingHorizontal: 10,
                      marginTop: 4,
                    }}>
                    <Text style={[commonStyles.largeTitle, {fontWeight: 700}]}>
                      {item.feeType}:
                    </Text>
                    <Text
                      style={[
                        commonStyles.largeTitle,
                        {fontWeight: 700, color: Color.green},
                      ]}>
                      ₹{item.amount}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      paddingHorizontal: 10,
                      marginTop: 4,
                    }}>
                    <Text
                      style={[
                        commonStyles.largeTitle,
                        {fontWeight: 500, fontSize: 16},
                      ]}>
                      Receipt Mode:
                    </Text>
                    <Text
                      style={[
                        commonStyles.largeTitle,
                        {fontWeight: 500, color: Color.gray1},
                      ]}>
                      {item.time}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: 8,
                    }}>
                    <View
                      style={{
                        backgroundColor: Color.gray,
                        height: 2,
                        width: 90,
                        marginRight: 8,
                      }}></View>
                    <Text style={commonStyles.smallTitle}>
                      Applicable Months
                    </Text>
                    <View
                      style={{
                        backgroundColor: Color.gray,
                        height: 2,
                        width: 90,
                        marginLeft: 8,
                      }}></View>
                  </View>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View>
                      <View style={styles.monthContent}>
                        <Text>Apr</Text>
                      </View>
                      <Text style={styles.date}>2023-04</Text>
                    </View>
                    <View>
                      <View style={styles.monthContent}>
                        <Text>Apr</Text>
                      </View>
                      <Text style={styles.date}>2023-04</Text>
                    </View>
                    <View>
                      <View style={styles.monthContent}>
                        <Text>Apr</Text>
                      </View>
                      <Text style={styles.date}>2023-04</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{flex: 0.8}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
            position: 'absolute',
            bottom: 2,
          }}>
          <CustomButtonPrimaryColor
            title="Add Class Fee"
            color={Color.white}
            bgColor={Color.primary}
            onPress={handleAddClassFee}
            width="95%"
            marginTop
          />
        </View>
      </View>

      <BottomSheetModal
        visible={modalVisible}
        onClose={closeModal}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginHorizontal: 1,
    borderWidth: 1, // Border width
    borderColor: '#ccc', // Border color
    borderRadius: 4, // Rounded corners
    overflow: 'hidden', // Ensure border radius works
  },
  settingItem: {
    width: '95%',
    alignSelf: 'center',
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
  date: {
    position: 'absolute',
    backgroundColor: Color.green,
    borderRadius: 9,
    color: Color.white,
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5,
    bottom: 6,
    alignSelf: 'center',
  },
  monthContent: {
    height: 70,
    width: 70,
    borderRadius: 38,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: Color.primary3,
  },
});

export default ClassFee;
