import {call, put, takeEvery} from 'redux-saga/effects';
import {UPDATE_CLASS_NAME_SUCCESS} from '../Constants/Constant';
import HTTPRequest from '../../Utils/HTTPRequest';
import {showToast} from '../../Utils/Util';
import {
  updateClassNameSuccess,
  updateClassNameFailure,
} from '../Actions/UpdateClassNameAction';

function* updateClassNameSagaFn(action) {
  const {staffId, schoolCode, oldClassName, className, session_id, class_id} =
    action.payload;
  try {
    const payload = `&class_name_new=${className}&class_name_old=${oldClassName}&class_id=${class_id}&staff_id=${staffId}&school_code=${schoolCode}&session_id=${session_id}`;
    const data = yield call(HTTPRequest.updateClassName, payload);
    if (data?.data?.api_status === 'OK') {
      yield put(
        updateClassNameSuccess(
          staffId,
          schoolCode,
          oldClassName,
          className,
          session_id,
          class_id,
        ),
      );
      showToast('success', 'Class Name Changed', '');
    }
  } catch (error) {
    console.error(error);
  }
}

function* updateClassNameSaga() {
  yield takeEvery(UPDATE_CLASS_NAME_SUCCESS, updateClassNameSagaFn);
}
export default updateClassNameSaga;
