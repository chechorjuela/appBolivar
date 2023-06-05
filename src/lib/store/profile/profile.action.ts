import {PROFILE_REQUEST, PROFILE_SUCCESS} from "@/lib/store/profile/profile.type";

export const profileRequest = () => ({
  type: PROFILE_REQUEST,
  payload: {},
});
export const profileSuccess = (payload: any) => ({
  type: PROFILE_SUCCESS,
  payload: payload,
});
