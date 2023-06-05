import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loadingRequest: false,
  auth: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loadingRequest = true;
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload
    },
    loginFailure: (state, action) => {
      // Handle login failure
    },
    logout: (state) => {
      // Handle logout
    },

  }
});
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout} = authSlice.actions
export default authSlice.reducer
