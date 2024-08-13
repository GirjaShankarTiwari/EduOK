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

const AddClassFee = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [boardId, setBoardId] = useState('');
  const [mediumId, setMediumId] = useState('');
  const [className, setClasssName] = useState('');
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
      }
    };

    fetchData();
  }, [data, navigation]);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const goToAllClasses = () => {
    navigation.navigate('classSettings');
  };

  const handleAddNewClass = () => {
    Alert.alert('Submitted');
  };

  //   if (loading) {
  //     return <Loader />;
  //   }

  const clsData = [
    'Play Group A',
    'Play Group B',
    'Play Group C',
    'Nursery',
    'LKG',
    'UKG',
  ];

  return (
    <View style={[commonStyles.container, {backgroundColor: Color.bgColor}]}>
      <View>
        <FlatList
          data={clsData}
          keyExtractor={({item, index}) => item + index}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.classItem}>
                <Text style={{color: Color.white, fontSize: 13}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{margin: 6}}>
        <Text
          style={{
            fontWeight: 500,
            color: Color.gray1,
            marginLeft: 2,
            marginTop: 8,
          }}>
          Fee Name:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 10,
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
              <Picker.Item label="Amit" value={null} style={{fontSize: 16}} />
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
        </View>
        <Text
          style={{
            fontWeight: 500,
            color: Color.gray1,
            marginLeft: 2,
          }}>
          Receipt Mode:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 10,
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
              <Picker.Item label="Amit" value={null} style={{fontSize: 16}} />
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
        </View>

        <Text
          style={{
            fontWeight: 500,
            color: Color.gray1,
            marginLeft: 2,
          }}>
          Class Name:
        </Text>
        <View
          style={[
            styles.pickerContainer,
            {
              backgroundColor: Color.white,
              borderRadius: 8,
              paddingLeft: 8,
              height: 40,
              marginTop: 4,
            },
          ]}>
          <TextInput
            value={className}
            onChangeText={txt => setClasssName(txt)}
            placeholder="Enter Class Name"
            style={[styles.input]}
          />
        </View>
        <Text
          style={{
            fontWeight: 500,
            color: Color.gray1,
            marginLeft: 2,
            marginTop: 8,
          }}>
          Collection Months:
        </Text>
      </View>

      <BottomSheetModal
        visible={modalVisible}
        onClose={closeModal}
        data={data}
      />
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
          title="Submit"
          color={Color.white}
          bgColor={Color.primary}
          onPress={goToAllClasses}
          width="95%"
          marginTop
        />
      </View>
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
  classItem: {
    height: 38,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 3,
    borderColor: Color.shyan,
    backgroundColor: Color.green,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    margin: 2,
  },
});

export default AddClassFee;
