import {
  UPDATE_CLASS_NAME_SUCCESS,
  UPDATE_CLASS_NAME_FAILURE,
} from '../Constants/Constant';

export const updateClassNameSuccess = (
  staffId,
  schoolCode,
  oldClassName,
  className,
  session_id,
  class_id,
) => {
  return {
    type: UPDATE_CLASS_NAME_SUCCESS,
    payload: {
      staffId,
      schoolCode,
      oldClassName,
      className,
      session_id,
      class_id,
    },
  };
};

export const updateClassNameFailure = error => {
  return {
    type: UPDATE_CLASS_NAME_FAILURE,
    payload: error,
  };
};
