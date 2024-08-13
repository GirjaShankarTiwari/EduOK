import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import Color from '../Constants/Color';
import Icons from '../Constants/Icons';
import {commonStyles} from '../Common/Styles/Styles';

const BottomSheetModal = ({visible, onClose, data}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.bottomSheet}>
          <TouchableOpacity style={styles.close} onPress={onClose}>
            <Image
              source={Icons.close}
              style={{height: 30, width: 30, tintColor: Color.gray}}
            />
          </TouchableOpacity>
          <Text style={commonStyles.largeTitlePrimaryDark}>Select Session</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <FlatList
              data={data}
              numColumns={4}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity key={index} style={styles.sessionItem}>
                    <Text>{item.session}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    top: 0,
  },
  sessionItem: {
    backgroundColor: Color.lightgray,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: Color.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 200,
  },

  sheetContent: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default BottomSheetModal;
