import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../../../../Common/Styles/Styles';
import {Picker} from '@react-native-picker/picker';

const sections = [
  {
    section_id: 1,
    section_name: 'A',
  },
  {
    section_id: 1,
    section_name: 'B',
  },
  {
    section_id: 1,
    section_name: 'C',
  },
];

const AddSection = () => {
  const [sectionId, setSectionId] = useState('');
  return (
    <View style={commonStyles.container}>
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
          selectedValue={sectionId}
          style={styles.picker}
          onValueChange={itemValue => setTeacherId(itemValue)}>
          {sections.map(item => (
            <Picker.Item
              key={item.section_id}
              label={item.section_name}
              value={item.section_id}
              style={{fontSize: 14}}
            />
          ))}
        </Picker>
      </View>
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
});

export default AddSection;
