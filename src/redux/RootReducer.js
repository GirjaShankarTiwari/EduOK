import {combineReducers} from 'redux';
import {getAdminMainDashboardData} from './Reducers/GetAdminMainDashboardReducer';
import {getClassWithStudentCountData} from './Reducers/GetClassWithStudentCountReducer';
import {updateClassNameData} from './Reducers/UpdateClassNameReducer';

export default combineReducers({
  getAdminMainDashboardData,
  getClassWithStudentCountData,
  updateClassNameData,
});
