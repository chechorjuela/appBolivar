import {LOGIN_REQUEST} from "@/lib/store/auth/auth.type";

export const loginRequest = (credentials: any) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});
