import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icons from '../../../../Constants/Icons';
import Color from '../../../../Constants/Color';
import {Calendar} from 'react-native-calendars';
import {RadioButton} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import CustomButtonPrimaryColor from '../../../../Components/CustomButtonPrimaryColor';
import Toast from 'react-native-toast-message';
import HTTPRequest from '../../../../Utils/HTTPRequest';
import axios from 'axios';
import LocalData from '../../../../Utils/LocalData';
import BottomSheetModal from '../../../../Components/BottomSheetModal ';
import {commonStyles} from '../../../../Common/Styles/Styles';

const data = [
  {
    id: 1,
    session: '2023-24',
  },
  {
    id: 2,
    session: '2022-23',
  },
  {
    id: 3,
    session: '2021-22',
  },
  {
    id: 4,
    session: '2020-21',
  },
];

const AddNewStudent = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [caste, setCaste] = useState('');
  const [religion, setReligion] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [nationality, setNationality] = useState('');
  const [lastAdmNum, setLastAdmNum] = useState(null);

  //date of birth
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // current address state's
  const [villTown, setVillTown] = useState('');
  const [post, setPost] = useState('');
  const [distict, setDistict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  //parmanent address state's

  const [p_villTown, setPVillTown] = useState('');
  const [p_post, setPPost] = useState('');
  const [p_distict, setPDistict] = useState('');
  const [p_state, setPState] = useState('');
  const [p_pincode, setPPincode] = useState('');

  //family info state's

  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherOccupation, setFatherOccupation] = useState('');
  const [motherOccupation, setMotherOccupation] = useState('');

  //contact details ref's

  const [contactNo1, setContactNo1] = useState('');
  const [contactNo1Relation, setContactNo1Relation] = useState('');
  const [contactPerson1, setContactPerson1] = useState('');
  const [contactNo2, setContactNo2] = useState('');
  const [contactNo2Relation, setContactNo2Relation] = useState('');
  const [contactPerson2, setContactPerson2] = useState('');
  const [email, setEmail] = useState('');

  const [selected, setSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [admissionType, setAdmissionType] = useState('New Admission');

  const [boardId, setBoardId] = useState('');
  const [mediumId, setMediumId] = useState('');
  const [classsId, setClassId] = useState('');
  const [errors, setErrors] = useState({});

  const [boardData, setBoardData] = useState([]);
  const [mediumsData, setMediumsData] = useState([]);
  const [classesData, setClassesData] = useState([]);

  const religions = [
    {label: 'Select Religion', value: ''},
    {label: 'Hindu', value: 'hindu'},
    {label: 'Islam', value: 'islam'},
    {label: 'Christian', value: 'christian'},
    {label: 'Sikh', value: 'sikh'},
    {label: 'Buddhist', value: 'buddhist'},
    {label: 'Jain', value: 'jai'},
    {label: 'Other', value: 'other'},
  ];

  const relationData = [
    {
      id: 1,
      title: 'Father',
    },
    {
      id: 2,
      title: 'Mother',
    },
    {
      id: 3,
      title: 'Brother',
    },
    {
      id: 4,
      title: 'Uncle',
    },
    {
      id: 5,
      title: 'Grand Father',
    },
  ];

  const stateData = [
    {label: 'UP', value: 'UP'},
    {label: 'Delhi', value: 'delhi'},
    {label: 'Bihar', value: 'bihar'},
  ];

  // Include placeholder in days, months, and years arrays
  const days = [
    'dd',
    ...Array.from({length: 31}, (_, i) => (i + 1).toString().padStart(2, '0')),
  ];
  const months = [
    'mm',
    ...Array.from({length: 12}, (_, i) => (i + 1).toString().padStart(2, '0')),
  ];
  const currentYear = new Date().getFullYear();
  const years = [
    'yyyy',
    ...Array.from({length: currentYear - 1900 + 1}, (_, i) =>
      (1985 + i).toString(),
    ),
  ];

  const validateFields = () => {
    const newErrors = {};

    if (!firstName || firstName.trim() === '') {
      newErrors.userName = 'First Name is required';
    }
    if (!selectedDay || !selectedMonth || !selectedYear) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!gender || gender === '') {
      newErrors.gender = 'Please select gender';
    }
    if (!category || category === '') {
      newErrors.category = 'Please select community';
    }

    if (!aadhar || aadhar.trim() === '') {
      newErrors.aadhar = 'Aadhar Number is required';
    } else if (aadhar.length !== 12) {
      newErrors.aadhar = 'Aadhar must be a 12-digit number';
    }
    if (!nationality || nationality.trim() === '') {
      newErrors.nationality = 'Nationality is required';
    }
    if (!boardId || !mediumId || !classsId) {
      newErrors.classInfo = 'Class Information is required';
    }

    if (!villTown || !post || !distict || !state || !pincode) {
      newErrors.currentAddress = 'Current Address is Required';
    }
    // if (!p_villTown || !p_post || !p_distict || !p_state || !p_pincode) {
    //   newErrors.parmanentAddress = 'Parmanent Address is Required';
    // }
    // if (!fatherName || !fatherOccupation || !motherName || !motherOccupation) {
    //   newErrors.familyDetails = 'Family Information  is Required';
    // }

    // if (!contactNo1 || !contactNo1Relation || !contactPerson1) {
    //   newErrors.contactDetails = 'Contact Details  is Required';
    // }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      Toast.show({
        type: 'error',
        text1: 'Validation Error',
        text2: 'Please check the form fields for errors',
      });
    } else {
      console.log('Form is valid');
      const ACADEMIC_MODE = 'ACDM01';
      const schoolCode = '11';
      const dob = selectedDay + '-' + selectedMonth + '-' + selectedYear;

      const params = new URLSearchParams();
      params.append('school_code', schoolCode);
      params.append('admDate', selected);
      params.append('session_id', '');
      params.append('student_name', firstName);
      params.append('dob', dob);
      params.append('gender', gender);
      params.append('community', category);
      params.append('religion', religion);
      params.append('aadhar_no', aadhar);
      params.append('nationality', nationality);
      params.append('board_id', '');
      params.append('medium_id', '');
      params.append('class_id', '');
      params.append('section_id', '');
      params.append('curAddress', villTown);
      params.append('perAddress', p_villTown);
      params.append('contact1', contactNo1);
      params.append('contact_person1', contactNo1Relation);
      params.append('contact_person_name1', contactPerson1);
      params.append('contact2', contactNo2);
      params.append('contact_person2', contactNo2Relation);
      params.append('contact_person_name2', contactPerson2);
      params.append('email', email);
      params.append('father_name', fatherName);
      params.append('father_occupation', fatherOccupation);
      params.append('father_qualification', '');
      params.append('father_aadhar', '');

      params.append('mother_name', motherName);
      params.append('mother_occupation', motherOccupation);
      params.append('mother_qualification', '');
      params.append('mother_aadhar', '');
      params.append('staff_id', 'stf01');

      params.append('admission_type', admissionType);
      params.append('academic_mode', ACADEMIC_MODE);
      params.append('caste', caste);
      params.append('admission_no', lastAdmNum);
      params.append('state_specific_id_name', '');
      params.append('state_specific_id_value', '');
      params.append('previous_school_details', '');
      params.append('village_town', villTown);
      params.append('post_locality', post);
      params.append('police_station', '');

      axios
        .post(
          'https://developer.piradius.online/PiZeroApi_Beta/ver1/registerStudent.php',
          params,
        )
        .then(res => res.data)
        .then(response => {
          const api_status = response?.api_status;
          console.log(api_status);
          if (api_status === 'OK') {
            var enrollment_no = response?.data;
            LocalData.setEnrollMentNumber(enrollment_no);
            navigation.navigate('registrationSuccess', {enrollment_no});
          }
        });
    }
  };

  const handleSubmitEvent = async params => {
    HTTPRequest.registerStudent(params)
      .then(response => {
        setLoading(false);
        const api_status = response?.data?.api_status;

        if (api_status == 'OK') {
          // LocalData.setUserInfo(response?.data?.staff[0]);
          // navigation.navigate('baseScreen');
        } else {
          Alert.alert('Student Registration Failed');
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        Alert.alert('Student Registration Failed--');
      });
  };

  useEffect(() => {
    const school_code = '11';
    const session_id = 'SSN0005';
    findCurrentDate(new Date());
    const queryParams = `&school_code=${school_code}&session_id=${session_id}`;
    getClassApi(queryParams);
    const queryParamsForLastAdmNum = `&school_code=${school_code}`;
    getLastAdmissionNo(queryParamsForLastAdmNum);
  }, []);

  const getLastAdmissionNo = queryParamsForLastAdmNum => {
    HTTPRequest.getLastAdmissionNo(queryParamsForLastAdmNum)
      .then(response => {
        const api_status = response?.data?.api_status;
        if (api_status == 'OK') {
          let lastAdmNum = response?.data?.data[0].sr_admission_no;
          setLastAdmNum(lastAdmNum);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  const getClassApi = queryParams => {
    HTTPRequest.getClass(queryParams)
      .then(response => {
        const api_status = response?.data?.api_status;
        const {board, medium, class: classData} = response.data.data;

        if (api_status == 'OK') {
          setBoardData(board);
          setMediumsData(medium);
          setClassesData(classData);
        }
      })
      .catch(error => {
        console.log(JSON.stringify(error));
      });
  };

  const findCurrentDate = currentDate => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    setSelected(`${year}-${month}-${day}`);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={[commonStyles.container, {marginBottom: 55}]}>
          <TouchableOpacity
            onPress={openModal}
            style={[commonStyles.roundedRectangleShape, {height: 45}]}>
            <View
              style={{
                flex: 1,
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
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 350,
              margin: 6,
              borderRadius: 6,
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: 'orange',
              },
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#c7c6c6',
              indicatorColor: 'blue',
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  commonStyles.largeTitle,
                  {marginLeft: 10, color: Color.primary},
                ]}>
                <Text
                  style={{
                    fontWeight: 500,
                    color: Color.black,
                    textAlign: 'center',
                  }}>
                  Admission Date:
                </Text>{' '}
                {selected}
              </Text>
              <Text style={{marginLeft: 10, marginTop: 8}}>
                Admission No.(Optional)
              </Text>
              <View
                style={[
                  commonStyles.roundedRectangleShape,
                  {flexDirection: 'row', justifyContent: 'space-between'},
                ]}>
                <Text style={styles.admissionInput}>{'201'}</Text>
                <TouchableOpacity>
                  <Text style={styles.admissionno}>Get</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{height: 140, width: 130}}>
                <Image
                  source={Icons.photo}
                  resizeMode="contain"
                  style={{
                    height: 120,
                    width: 100,
                    borderRadius: 5,
                    margin: 5,
                    borderWidth: 2,
                    backgroundColor: Color.lightgray,
                    borderColor: Color.primary,
                  }}
                />
                <TouchableOpacity style={styles.camerabtn}>
                  <Image
                    source={Icons.camera}
                    style={{height: 22, width: 22}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <BottomSheetModal
            visible={modalVisible}
            onClose={closeModal}
            data={data}
          />

          <View style={{margin: 8}}>
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
              }}>
              Admission Type:
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <RadioButton.Group
                onValueChange={value => setAdmissionType(value)}
                value={admissionType}>
                <View style={styles.row}>
                  <View style={styles.radioItem}>
                    <RadioButton value="New Admission" />
                    <Text>New Admission</Text>
                  </View>
                  <View style={styles.radioItem}>
                    <RadioButton value="Promoted(ReAdm)" />
                    <Text>Promoted(ReAdm)</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
              }}>
              Student Information:
            </Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={firstName}
                onChangeText={txt => setFirstName(txt)}
                placeholder="Enter First Name"
                style={[styles.input]}
              />
            </View>
            {errors.userName && (
              <Text style={styles.error}>{errors.userName}</Text>
            )}
            <View style={styles.inputWrapper}>
              <TextInput
                value={lastName}
                onChangeText={txt => setLastName(txt)}
                placeholder="Enter Last Name"
                style={[styles.input]}
              />
            </View>

            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Date of Birth:
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedDay}
                  style={styles.picker}
                  onValueChange={value => setSelectedDay(value)}>
                  {days.map(day => (
                    <Picker.Item key={day} label={day} value={day} />
                  ))}
                </Picker>
              </View>

              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedMonth}
                  style={styles.picker}
                  onValueChange={value => setSelectedMonth(value)}>
                  {months.map(month => (
                    <Picker.Item key={month} label={month} value={month} />
                  ))}
                </Picker>
              </View>
              <View style={[styles.pickerContainer, {flex: 1.2}]}>
                <Picker
                  selectedValue={selectedYear}
                  style={styles.picker}
                  onValueChange={value => setSelectedYear(value)}>
                  {years.map(year => (
                    <Picker.Item key={year} label={year} value={year} />
                  ))}
                </Picker>
              </View>
            </View>
            {errors.dob && <Text style={styles.error}>{errors.dob}</Text>}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Gender:
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <RadioButton.Group
                onValueChange={value => setGender(value)}
                value={gender}>
                <View style={styles.row}>
                  <View style={styles.radioItem}>
                    <RadioButton value="Male" />
                    <Text>Male</Text>
                  </View>
                  <View style={styles.radioItem}>
                    <RadioButton value="Female" />
                    <Text>Female</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            {errors.dob && <Text style={styles.error}>{errors.gender}</Text>}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Community:
            </Text>
            <RadioButton.Group
              onValueChange={value => setCategory(value)}
              value={category}>
              <View
                style={[
                  styles.row,
                  {
                    paddingRight: 20,
                    justifyContent: 'space-between',
                  },
                ]}>
                <View style={styles.radioItem2}>
                  <RadioButton value="SC" style={styles.radioButton} />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>SC</Text>
                </View>
                <View style={styles.radioItem2}>
                  <RadioButton value="ST" style={styles.radioButton} />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>ST</Text>
                </View>
                <View style={styles.radioItem2}>
                  <RadioButton value="OBC" />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>OBC</Text>
                </View>
                <View style={styles.radioItem2}>
                  <RadioButton value="General" />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                    General
                  </Text>
                </View>
                <View style={styles.radioItem2}>
                  <RadioButton value="SBC" />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>SBC</Text>
                </View>
                <View style={styles.radioItem2}>
                  <RadioButton value="Other" />
                  <Text style={{fontSize: 12, fontWeight: 'bold'}}>Other</Text>
                </View>
              </View>
            </RadioButton.Group>
            {errors.category && (
              <Text style={styles.error}>{errors.category}</Text>
            )}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 5,
              }}>
              Caste(Optional):
            </Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={caste}
                placeholder="Enter Your Caste"
                onChangeText={value => setCaste(value)}
                style={[styles.input]}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  color: Color.black,
                  marginTop: 5,
                  flex: 1,
                }}>
                Religion:
              </Text>
              <View
                style={[
                  styles.pickerContainer,
                  {
                    backgroundColor: Color.white,
                    height: 40,
                    justifyContent: 'center',
                    marginTop: 8,
                    flex: 2,
                  },
                ]}>
                <Picker
                  selectedValue={religion}
                  style={styles.picker}
                  onValueChange={itemValue => setReligion(itemValue)}>
                  {religions.map(item => (
                    <Picker.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: 500,
                  color: Color.black,
                  marginTop: 5,
                }}>
                Aadhar Number:
              </Text>
              <View style={[styles.inputWrapper, {flex: 2}]}>
                <TextInput
                  value={aadhar}
                  placeholder="Aadhar Number"
                  onChangeText={value => setAadhar(value)}
                  style={[styles.input]}
                  keyboardType="number-pad"
                />
                {errors.aadhar && (
                  <Text style={styles.error}>{errors.aadhar}</Text>
                )}
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: 500,
                  color: Color.black,
                  marginTop: 5,
                }}>
                Nationality:
              </Text>
              <View style={[styles.inputWrapper, {flex: 2}]}>
                <TextInput
                  value={nationality}
                  placeholder="Nationality"
                  onChangeText={value => setNationality(value)}
                  style={[styles.input]}
                />
                {errors.nationality && (
                  <Text style={styles.error}>{errors.nationality}</Text>
                )}
              </View>
            </View>

            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Class Information:
            </Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.pickerContainer,
                    {
                      backgroundColor: Color.white,
                      height: 40,
                      justifyContent: 'center',
                      marginTop: 8,
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
                      marginTop: 8,
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
              <View
                style={[
                  styles.pickerContainer,
                  {
                    backgroundColor: Color.white,
                    height: 40,
                    justifyContent: 'center',
                    marginTop: 4,
                    flex: 2,
                  },
                ]}>
                <Picker
                  selectedValue={classsId}
                  style={styles.picker}
                  onValueChange={itemValue => setClassId(itemValue)}>
                  <Picker.Item
                    label="Select Class"
                    value={null}
                    style={{fontSize: 14}}
                  />
                  {classesData.map(item => (
                    <Picker.Item
                      key={item.class_id}
                      label={item.class_name}
                      value={item.class_id}
                      style={{fontSize: 14}}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            {errors.classInfo && (
              <Text style={styles.error}>{errors.classInfo}</Text>
            )}
            {/* Current Address */}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Current Address* :
            </Text>
            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={villTown}
                  placeholder="Villege/Town"
                  onChangeText={value => setVillTown(value)}
                  style={[styles.input]}
                />
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 4}]}>
                  <TextInput
                    value={post}
                    placeholder="Post"
                    onChangeText={value => setPost(value)}
                    style={[styles.input]}
                  />
                </View>

                <View style={[styles.inputWrapper, {flex: 1, marginTop: 4}]}>
                  <TextInput
                    value={distict}
                    placeholder="Distict"
                    onChangeText={value => setDistict(value)}
                    style={[styles.input]}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                }}>
                <View
                  style={[
                    styles.pickerContainer,
                    {
                      backgroundColor: Color.white,
                      height: 40,
                      justifyContent: 'center',
                      flex: 1,
                    },
                  ]}>
                  <Picker
                    selectedValue={state}
                    style={styles.picker}
                    onValueChange={itemValue => setState(itemValue)}>
                    {stateData.map(item => (
                      <Picker.Item
                        key={item.value}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </Picker>
                </View>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 0}]}>
                  <TextInput
                    value={pincode}
                    placeholder="Pincode"
                    onChangeText={value => setPincode(value)}
                    style={[styles.input]}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            {errors.currentAddress && (
              <Text style={styles.error}>{errors.currentAddress}</Text>
            )}
            {/* Permanent Address */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 5,
                marginTop: 8,
              }}>
              <Text
                style={{
                  fontWeight: 500,
                  color: Color.black,
                }}>
                Parmanent Address* :
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    height: 16,
                    width: 16,
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: Color.gray,
                    marginTop: 2,
                    marginRight: 8,
                  }}></Text>
                <Text style={commonStyles.smallTitle}>Same as Current</Text>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={p_villTown}
                  placeholder="Villege/Town"
                  onChangeText={value => setPVillTown(value)}
                  style={[styles.input]}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 4}]}>
                  <TextInput
                    value={p_post}
                    placeholder="Post"
                    onChangeText={value => setPPost(value)}
                    style={[styles.input]}
                  />
                </View>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 4}]}>
                  <TextInput
                    value={p_distict}
                    placeholder="Distict"
                    onChangeText={value => setPDistict(value)}
                    style={[styles.input]}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 4,
                }}>
                <View
                  style={[
                    styles.pickerContainer,
                    {
                      backgroundColor: Color.white,
                      height: 40,
                      justifyContent: 'center',
                      flex: 1,
                    },
                  ]}>
                  <Picker
                    selectedValue={p_state}
                    style={styles.picker}
                    onValueChange={itemValue => setPState(itemValue)}>
                    {stateData.map(item => (
                      <Picker.Item
                        key={item.value}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </Picker>
                </View>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 0}]}>
                  <TextInput
                    value={p_pincode}
                    placeholder="Pincode"
                    onChangeText={value => setPPincode(value)}
                    style={[styles.input]}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            {errors.parmanentAddress && (
              <Text style={styles.error}>{errors.parmanentAddress}</Text>
            )}
            {/* Family Information */}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Family Information* :
            </Text>
            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  value={fatherName}
                  placeholder="Father Name"
                  onChangeText={value => setFatherName(value)}
                  style={[styles.input]}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: 500,
                    color: Color.black,
                  }}>
                  Father Occupation:
                </Text>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 2}]}>
                  <TextInput
                    value={fatherOccupation}
                    placeholder="Farmer"
                    onChangeText={value => setFatherOccupation(value)}
                    style={[styles.input]}
                  />
                </View>
              </View>
              <View style={[styles.inputWrapper, {marginTop: 2}]}>
                <TextInput
                  value={motherName}
                  placeholder="Mother Name"
                  onChangeText={value => setMotherName(value)}
                  style={[styles.input]}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: 500,
                    color: Color.black,
                  }}>
                  Mother Occupation:
                </Text>
                <View style={[styles.inputWrapper, {flex: 1, marginTop: 2}]}>
                  <TextInput
                    value={motherOccupation}
                    placeholder="House Wife"
                    onChangeText={value => setMotherOccupation(value)}
                    style={[styles.input]}
                  />
                </View>
              </View>
            </View>
            {errors.familyDetails && (
              <Text style={styles.error}>{errors.familyDetails}</Text>
            )}
            {/* Contact Details */}
            <Text
              style={{
                fontWeight: 500,
                color: Color.black,
                marginTop: 8,
              }}>
              Contact Details* :
            </Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={[
                    styles.pickerContainer,
                    {
                      backgroundColor: Color.white,
                      height: 40,
                      justifyContent: 'center',
                      marginTop: 8,
                      flex: 2,
                    },
                  ]}>
                  <TextInput
                    value={contactNo1}
                    placeholder="Contact No1"
                    onChangeText={value => setContactNo1(value)}
                    style={[styles.input]}
                    keyboardType="phone-pad"
                  />
                </View>
                <View
                  style={[
                    styles.pickerContainer,
                    {
                      backgroundColor: Color.white,
                      height: 40,
                      justifyContent: 'center',
                      marginTop: 8,
                      flex: 2,
                    },
                  ]}>
                  <Picker
                    selectedValue={contactNo1Relation}
                    style={styles.picker}
                    onValueChange={itemValue =>
                      setContactNo1Relation(itemValue)
                    }>
                    {relationData.map(item => (
                      <Picker.Item
                        key={item.id}
                        label={item.title}
                        value={item.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <View
                style={[
                  styles.pickerContainer,
                  {
                    backgroundColor: Color.white,
                    height: 40,
                    justifyContent: 'center',
                    marginTop: 4,
                    flex: 2,
                  },
                ]}>
                <TextInput
                  value={contactPerson1}
                  placeholder="Contact Person Name*"
                  onChangeText={value => setContactPerson1(value)}
                  style={[styles.input]}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 2}}>
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
                  <TextInput
                    value={contactNo2}
                    placeholder="Contact No2"
                    onChangeText={value => setContactNo2(value)}
                    style={[styles.input]}
                    keyboardType="phone-pad"
                  />
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
                    selectedValue={contactNo2Relation}
                    style={styles.picker}
                    onValueChange={itemValue =>
                      setContactNo2Relation(itemValue)
                    }>
                    {relationData.map(item => (
                      <Picker.Item
                        key={item.id}
                        label={item.title}
                        value={item.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <View
                style={[
                  styles.pickerContainer,
                  {
                    backgroundColor: Color.white,
                    height: 40,
                    justifyContent: 'center',
                    marginTop: 4,
                    flex: 2,
                  },
                ]}>
                <TextInput
                  value={contactPerson2}
                  placeholder="Contact Person Name*"
                  onChangeText={value => setContactPerson2(value)}
                  style={[styles.input]}
                />
              </View>
              <View
                style={[
                  styles.pickerContainer,
                  {
                    backgroundColor: Color.white,
                    height: 40,
                    justifyContent: 'center',
                    marginTop: 4,
                    flex: 2,
                  },
                ]}>
                <TextInput
                  value={email}
                  placeholder="Email (If any)"
                  onChangeText={value => setEmail(value)}
                  style={[styles.input]}
                  keyboardType="email-address"
                />
              </View>
            </View>
            {errors.contactDetails && (
              <Text style={styles.error}>{errors.contactDetails}</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          margin: 5,
          backgroundColor: Color.white,
          position: 'absolute',
          bottom: 0,
          width: '97%',
        }}>
        <CustomButtonPrimaryColor
          title="Submit"
          color={Color.white}
          bgColor={Color.primary}
          onPress={validateFields}
        />
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  admissionno: {
    backgroundColor: Color.primary,
    height: 45,
    width: 70,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Color.white,
    fontSize: 16,
    margin: 0,
    borderBottomEndRadius: 4,
    borderTopRightRadius: 4,
  },
  camerabtn: {
    backgroundColor: Color.primary2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    position: 'absolute',
    right: 12,
    bottom: 10,
    borderColor: Color.primary,
  },
  admissionInput: {
    height: 45,
    textAlignVertical: 'center',
    paddingLeft: 10,
    fontSize: 15,
    color: Color.black,
  },
  error: {
    color: Color.redColor,
    alignSelf: 'flex-start',
    fontSize: 11,
    marginLeft: 2,
  },
  inputWrapper: {
    height: 40,
    backgroundColor: Color.white,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: Color.gray,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 1,
    borderWidth: 1, // Border width
    borderColor: '#ccc', // Border color
    borderRadius: 4, // Rounded corners
    overflow: 'hidden', // Ensure border radius works
  },
  input: {
    paddingLeft: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginRight: 16, // space between items
    width: '50%',
  },
  radioItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginRight: 16, // space between items
    transform: [{scale: 0.75}],
    marginRight: 0,
  },
  picker: {
    height: 50,
    marginVertical: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: 10,
    textAlign: 'center',
  },
  radioButton: {
    width: 16, // Custom width for the radio button
    height: 16, // Custom height for the radio button
    borderRadius: 8, // Make the circle by setting borderRadius to half of the width/height
    // Additional styles to center the circle in its container
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddNewStudent;
