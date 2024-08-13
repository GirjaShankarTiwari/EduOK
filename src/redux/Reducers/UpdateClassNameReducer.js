import {
  UPDATE_CLASS_NAME_FAILURE,
  UPDATE_CLASS_NAME_SUCCESS,
} from '../Constants/Constant';

// Define the initial state
const initialState = {
  staffId: null,
  schoolCode: null,
  oldClassName: null,
  className: null,
  session_id: null,
  class_id: null,
  error: null,
  loading: false, // Optional: to manage loading state
};

export const updateClassNameData = (data = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLASS_NAME_SUCCESS:
      // return action.data;
      return {
        ...data,
        staffId: action.payload.staffId,
        schoolCode: action.payload.schoolCode,
        oldClassName: action.payload.oldClassName,
        className: action.payload.className,
        session_id: action.payload.session_id,
        class_id: action.payload.class_id,
        error: null, // Clear any previous errors
        loading: false, // Optionally manage loading state
      };
    case UPDATE_CLASS_NAME_FAILURE:
      return {
        ...data,
        error: action.payload, // Set the error message
        loading: false, // Optionally manage loading state
      };
    default:
      return data;
  }
};
