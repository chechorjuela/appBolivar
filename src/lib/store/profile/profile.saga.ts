import {call, put, takeLatest} from 'redux-saga/effects'
import {getRequest} from "@/lib/utils/requestHttp";
import {profileFailure, profileRequest, profileSuccess} from "@/lib/store/profile/profile.slice";
import {apiProfile} from "@/lib/settings/apiUrlSpotify";

export function* getProfileUser(states = "", payload = {}) {
  try {
    // @ts-ignore
    const profileUser = yield call(getRequest, apiProfile);
    if (profileUser.data)
      yield put(profileSuccess(profileUser.data));
  } catch (error) {
    yield put(profileFailure(error));
  }
}

export function* watchProfileAsync() {
  yield takeLatest(profileRequest.type, getProfileUser)
}
