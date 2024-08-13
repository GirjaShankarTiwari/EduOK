import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  setUserInfo(data) {
    return AsyncStorage.setItem('userInfo', JSON.stringify(data));
  },
  getUserInfo() {
    return AsyncStorage.getItem('userInfo');
  },
  setEnrollMentNumber(enrollment_no) {
    return AsyncStorage.setItem('enrollment_no', enrollment_no);
  },
  getEnrollMentNumber() {
    return AsyncStorage.getItem('enrollment_no');
  },
};
