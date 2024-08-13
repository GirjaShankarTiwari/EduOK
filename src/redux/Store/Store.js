import {configureStore} from '@reduxjs/toolkit';
import RootReducer from '../RootReducer';
import getAdminMainDashboardSaga from '../Saga/GetAdminMainDashboardSaga';
import getClassWithStudentCountSaga from '../Saga/GetClassWithStudentCountSaga';
import createSagaMiddleware from 'redux-saga';
import updateClassNameSaga from '../Saga/UpdateClassNameSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: RootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(getAdminMainDashboardSaga);
sagaMiddleware.run(getClassWithStudentCountSaga);
sagaMiddleware.run(updateClassNameSaga);
export default store;
