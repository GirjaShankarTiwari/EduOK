import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_CLASS_WITH_STUDENT_COUNT,
  SET_CLASS_WITH_STUDENT_COUNT,
} from '../Constants/Constant';
import HTTPRequest from '../../Utils/HTTPRequest';

function* getClassWithStudentCount() {
  const school_code = '11';
  const session_id = 'SSN0005';

  try {
    const payload = `&school_code=${school_code}&session_id=${session_id}`;
    const data = yield call(HTTPRequest.getClassWithStudentCount, payload);
    if (data?.data?.api_status) {
      yield put({type: SET_CLASS_WITH_STUDENT_COUNT, data});
    }
  } catch (error) {
    console.error(error);
  }
}

function* getClassWithStudentCountSaga() {
  yield takeEvery(GET_CLASS_WITH_STUDENT_COUNT, getClassWithStudentCount);
}
export default getClassWithStudentCountSaga;
