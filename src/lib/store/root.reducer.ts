import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "@/lib/store/auth/auth.slice";
import searchSlice from "@/lib/store/search/search.slice";
import profileSlice from "@/lib/store/profile/profile.slice";

const rootReducer = combineReducers({
  auth: authSlice,
  search: searchSlice,
  profile: profileSlice
});

export default rootReducer;
