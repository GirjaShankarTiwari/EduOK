import {SET_CLASS_WITH_STUDENT_COUNT} from '../Constants/Constant';

export const getClassWithStudentCountData = (data = {}, action) => {
  switch (action.type) {
    case SET_CLASS_WITH_STUDENT_COUNT:
      return action.data;

    default:
      return data;
  }
};
