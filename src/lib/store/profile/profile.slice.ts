import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  loadingRequest: false,
  profileUser: {},
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileRequest: (state, action) => {
      state.loadingRequest = true;
    },
    profileSuccess: (state, action) => {
      state.loadingRequest = false;
      state.profileUser = action.payload;
    },
    profileFailure: (state, action) => {
      state.loadingRequest = false;
      state.error = action.payload
    }
  }
});
export const {
  profileRequest,
  profileSuccess,
  profileFailure
} = profileSlice.actions
export default profileSlice.reducer
