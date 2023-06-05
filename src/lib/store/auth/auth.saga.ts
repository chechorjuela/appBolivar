import {call, put, takeLatest} from 'redux-saga/effects'
import {loginFailure, loginSuccess} from "@/lib/store/auth/auth.slice";
import {loginRequest} from "@/lib/store/auth/auth.slice";
import {postRequest} from "@/lib/utils/requestHttp";

export function* getFilesSaga(states = "") {
  console.info("executre")
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  const clientId = 'YOUR_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const scopes = ['user-read-private', 'user-read-email']; // Add any required scopes

  try {
    // @ts-ignore
    const user = yield call(postRequest(tokenEndpoint), {});
    yield put(loginSuccess(user));
  } catch (error) {
    yield put(loginFailure("Error"));
  }
}

export function* wathAuthAsync() {
  yield takeLatest(loginRequest.type, getFilesSaga)
}
