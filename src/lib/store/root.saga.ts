import { all } from "redux-saga/effects";
import {wathAuthAsync} from "@/lib/store/auth/auth.saga";
import {watchProfileAsync} from "@/lib/store/profile/profile.saga";
import {wathSearchAsync} from "@/lib/store/search/search.saga";
export default function* rootSaga() {
  yield all([
    wathAuthAsync(),
    wathSearchAsync(),
    watchProfileAsync()
  ]);
}
