import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import Color from '../../../../../Constants/Color';
import Icons from '../../../../../Constants/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {updateClassNameSuccess} from '../../../../../redux/Actions/UpdateClassNameAction';
import LocalData from '../../../../../Utils/LocalData';
import {Picker} from '@react-native-picker/picker';
import HTTPRequest from '../../../../../Utils/HTTPRequest';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';

const EditClass = ({route}) => {
  const navigation = useNavigation();
  const {classData} = route.params;
  //console.log(JSON.stringify(classData) + 'classdata');
  const [className, setClassName] = useState(classData?.class_name);
  const [isClassNameEdited, setClassNameEdited] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEditable, setIsEditable] = useState(true);
  const [staffId, setStaffId] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [teacherId, setTeacherId] = useState('');
  const [teacherData, setTeacherData] = useState([]);
  const [sections, setSections] = useState([]);

  const dispatch = useDispatch();

  const oldClassName = classData.class_name;
  const data = useSelector(state => state.updateClassNameData);

  useEffect(() => {
    classData.section_name = classData.section_name.map((section, index) => ({
      sectionId: `section${index + 1}`,
      sectionName: section,
    }));
    setSections(classData.section_name);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (data.className !== null) {
        if (data.className !== oldClassName) {
          setClassNameEdited(false);
          setIsDisabled(true);
          setIsEditable(!isEditable);
        }
      }
    };

    fetchData();
  }, [data]);

  useEffect(() => {
    const school_code = '11';
    const session_id = 'SSN0005';
    const queryParams = `&school_code=${school_code}&session_id=${session_id}`;
    getClassTeacherList(queryParams);
  }, []);

  const getClassTeacherList = queryParams => {
    HTTPRequest.getClassTeacherList(queryParams)
      .then(response => {
        const api_status = response?.data?.api_status;
        if (api_status == 'OK') {
          setTeacherData(response?.data?.data);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  const handleUpdateClass = () => {
    dispatch(
      updateClassNameSuccess(
        staffId,
        schoolCode,
        oldClassName,
        className,
        classData.session_id,
        classData.class_id,
      ),
    );
  };

  useEffect(() => {
    const fetchDataFromLocal = async () => {
      try {
        let userData = await LocalData.getUserInfo();
        let parseData = userData != null ? JSON.parse(userData) : null;
        if (parseData !== null) {
          const staff_id = parseData?.staff_id;
          const school_code = parseData?.school_code;
          setStaffId(staff_id);
          setSchoolCode(school_code);
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchDataFromLocal();
  }, []);

  const handleClassTextChange = newText => {
    setClassName(newText);
    setClassNameEdited(true);
    setIsDisabled(false);
  };
  const handleAddSection = () => {
    navigation.navigate('addSection');
  };
  return (
    <View style={[commonStyles.container, {backgroundColor: Color.bgColor}]}>
      <ScrollView style={{flex: 1}}>
        <View style={{margin: 2, paddingBottom: 70}}>
          <View
            style={[
              commonStyles.roundedShapeGray,
              {
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
                flexDirection: 'column',
                padding: 10,
              },
            ]}>
            <Text
              style={[
                commonStyles.smallTitle,
                {fontWeight: 700, color: Color.gray1},
              ]}>
              Change Class Name
            </Text>
            <View
              style={[
                styles.inputContainer,
                {
                  flexDirection: 'row',
                  height: 40,
                  marginTop: 5,
                  justifyContent: 'space-between',
                },
              ]}>
              <TextInput
                style={{
                  paddingLeft: 8,
                  fontSize: 16,
                  flex: 3,
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4,
                  padding: 2,
                }}
                value={className}
                onChangeText={handleClassTextChange}
                editable={isEditable}
              />
              <TouchableOpacity
                onPress={handleUpdateClass}
                disabled={isDisabled}
                style={[
                  styles.savebutton,
                  isClassNameEdited
                    ? styles.activeButton
                    : styles.inactiveButton,
                ]}>
                <Text style={[commonStyles.smallTitle, {color: Color.white}]}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FlatList
            data={sections}
            keyExtractor={(item, indx) => item.sectionId + indx}
            renderItem={({item}) => {
              return (
                <View
                  style={[
                    commonStyles.roundedShapeGray,
                    {
                      marginTop: 10,
                      marginLeft: 5,
                      marginRight: 5,
                      flexDirection: 'column',
                      paddingBottom: 6,
                    },
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      backgroundColor: Color.primary2,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      padding: 5,
                    }}>
                    <Text
                      style={[
                        commonStyles.smallTitle,
                        {fontWeight: 700, color: Color.black},
                      ]}>
                      Class: {className}
                    </Text>

                    <Text
                      style={[
                        commonStyles.smallTitle,
                        {fontWeight: 500, color: Color.black, marginRight: 8},
                      ]}>
                      Students:{classData?.total_student}
                    </Text>
                  </View>
                  <View style={{width: '100%'}}>
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 12,
                        marginLeft: 6,
                        marginTop: 6,
                        marginBottom: -2,
                      }}>
                      Class Teacher : Section -
                    </Text>

                    <View
                      style={[
                        styles.inputContainer,
                        {
                          height: 50,
                          marginTop: 5,
                          marginLeft: 6,
                          marginRight: 6,
                          justifyContent: 'space-between',
                        },
                      ]}>
                      <Picker
                        selectedValue={teacherId}
                        style={styles.picker}
                        onValueChange={itemValue => setTeacherId(itemValue)}>
                        {/* {teacherData.map(item => (
                          <Picker.Item
                            key={item.staff_id}
                            label={item.staff_name}
                            value={item.staff_id}
                            style={{fontSize: 14}}
                          />
                        ))} */}
                      </Picker>
                    </View>
                    <TouchableOpacity style={styles.updatebtn}>
                      <Text style={{color: Color.white}}>
                        Update class Teacher
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          height: 55,
          position: 'absolute',
          bottom: 10,
          right: 16,
          width: '50%',
          borderRadius: 26,
        }}
        onPress={() => {
          handleAddSection();
        }}>
        <View style={[styles.floatingButton, {borderRadius: 26}]}>
          <Text style={[commonStyles.smallTitle, {color: Color.white}]}>
            Add New Section
          </Text>
          <View style={styles.flotbtn}>
            <Image source={Icons.add} style={{height: 30, width: 30}} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  savebutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Color.primary,
  },
  inactiveButton: {
    backgroundColor: Color.gray,
  },
  picker: {
    height: 50,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: 10,
    textAlign: 'center',
  },
  updatebtn: {
    backgroundColor: Color.primaryDark,
    alignSelf: 'center',
    padding: 5,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    backgroundColor: Color.primary2,
  },
  flotbtn: {
    height: 48,
    width: 50,
    borderWidth: 0.4,
    borderColor: Color.primary4,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Color.primary2,
  },
});

export default EditClass;
