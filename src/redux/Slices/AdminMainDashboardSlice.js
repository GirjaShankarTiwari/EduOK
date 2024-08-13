import {createSlice} from '@reduxjs/toolkit';

const adminDashboardSlice = createSlice({
  name: 'adminDashboard',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataRequest(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchDataRequest, fetchDataSuccess, fetchDataFailure} =
  adminDashboardSlice.actions;
export default adminDashboardSlice.reducer;
