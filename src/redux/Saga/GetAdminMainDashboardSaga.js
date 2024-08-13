import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_ADMIN_MAIN_DASHBOARD,
  SET_ADMIN_MAIN_DASHBOARD,
} from '../Constants/Constant';
import HTTPRequest from '../../Utils/HTTPRequest';

function* getAdminMainDashboard() {
  const school_code = '11';
  const system_code = '11';
  const CurrentVersionCode = '115';

  try {
    const payload = `&school_code=${school_code}&system_code=${system_code}&CurrentVersionCode=${CurrentVersionCode}`;
    const data = yield call(HTTPRequest.getAdminMainDashboard, payload);
    yield put({type: SET_ADMIN_MAIN_DASHBOARD, data});
  } catch (error) {
    console.error(error);
  }
}

function* getAdminMainDashboardSaga() {
  yield takeEvery(GET_ADMIN_MAIN_DASHBOARD, getAdminMainDashboard);
}
export default getAdminMainDashboardSaga;
