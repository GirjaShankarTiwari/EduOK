import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
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

const stdListData = [
  {
    id: 1,
    name: 'Amrita Pandey (S055311)',
    father: 'OM Prakash',
    gender: 'Female',
    class_name: 'Play Group',
    section: 'A',
  },
  {
    id: 2,
    name: 'Arun Pandey (S035312)',
    father: 'Gyan Prakash',
    gender: 'Male',
    class_name: 'Play Group',
    section: 'A',
  },
];

const RollNumberManagement = ({navigation}) => {
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

  const handleAddNewClass = () => {
    navigation.navigate('addNewClass');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={[commonStyles.container]}>
      <View style={{flex: 1.2, paddingBottom: 10}}>
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
      <View style={{flex: 7, paddingTop: 10, backgroundColor: Color.bgColor}}>
        {stdListData.length ? (
          <FlatList
            data={stdListData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({item}) => {
              return (
                <View style={styles.settingItem}>
                  <View style={styles.stdinfo}>
                    <Image
                      source={Icons.avtar}
                      style={{
                        height: 60,
                        width: 60,
                        borderWidth: 1,
                        borderColor: Color.golden,
                        borderRadius: 30,
                      }}
                    />
                    <View style={{marginLeft: 16}}>
                      <Text
                        style={[
                          commonStyles.smallTitle,
                          {fontWeight: 700, fontSize: 16},
                        ]}>
                        {item.name}
                      </Text>
                      <Text style={commonStyles.smallTitle}>
                        {item.gender == 'Female' ? 'D/O: ' : 'S/O: '}
                        {item.father}
                      </Text>
                      <Text style={commonStyles.smallTitle}>
                        {item.class_name}: {item.section}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.rollno}>
                    <Text style={{color: Color.white, width: '20%'}}>
                      Roll No.
                    </Text>
                    <TextInput value="1" style={styles.input} />
                    <TouchableOpacity
                      style={{
                        width: '20%',
                      }}>
                      <Text
                        style={[
                          commonStyles.smallTitle,
                          {fontWeight: 700, color: Color.white},
                        ]}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rollno}>
                    <Text style={{color: Color.white, width: '20%'}}>
                      Adm No.
                    </Text>
                    <TextInput value="201" style={styles.input} />
                    <TouchableOpacity
                      style={{
                        width: '20%',
                      }}>
                      <Text
                        style={[
                          commonStyles.smallTitle,
                          {fontWeight: 700, color: Color.white},
                        ]}>
                        Edit
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        ) : null}
      </View>

      <View style={{flex: 0.8}}>
        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5,
            paddingHorizontal: 10,
            position: 'absolute',
            flexDirection: 'row',
            bottom: 2,
          }}>
          <CustomButtonPrimaryColor
            title="Roll Out From 1"
            color={Color.white}
            bgColor={Color.primary}
            onPress={handleAddNewClass}
            width="47%"
          />
          <CustomButtonPrimaryColor
            title="Roll Out Alphabatic"
            color={Color.white}
            bgColor={Color.primary}
            onPress={handleAddNewClass}
            width="47%"
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
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: Color.white,
    elevation: 2,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  stdinfo: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopEndRadius: 8,
  },
  input: {
    backgroundColor: Color.white,
    width: '60%',
    backgroundColor: Color.bgColor,
    borderColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 1,
    marginTop: 1,
    paddingTop: 2,
    textAlignVertical: 'center',
  },
  rollno: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.primary,
    height: 35,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '96%',
    alignSelf: 'center',
  },
});

export default RollNumberManagement;
