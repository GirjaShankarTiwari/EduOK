import {SET_ADMIN_MAIN_DASHBOARD} from '../Constants/Constant';

export const getAdminMainDashboardData = (data = {}, action) => {
  switch (action.type) {
    case SET_ADMIN_MAIN_DASHBOARD:
      return action.data;

    default:
      return data;
  }
};
