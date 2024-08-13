import {call, put, takeEvery} from 'redux-saga/effects';
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from '../Slices/AdminMainDashboardSlice';

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromApi); // replace with your API call
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.toString()));
  }
}

export function* watchFetchAdminDashboardSaga() {
  yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}

async function fetchDataFromApi() {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}
