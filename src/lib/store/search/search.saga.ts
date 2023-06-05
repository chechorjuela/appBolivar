import {call, put, takeLatest} from 'redux-saga/effects'
import {getRequest} from "@/lib/utils/requestHttp";
import {getObjectSuccess, searchFailure, searchRequest, searchSuccess} from "@/lib/store/search/search.slice";
import {apiSearch} from "@/lib/settings/apiUrlSpotify";
import {objectToQueryParams} from "@/lib/utils/queryParams";

interface stateInt {
  type: string,
  payload: object
}

export function* getSearch(states: stateInt) {
  const queryFilter = objectToQueryParams(states.payload);
  try {
    // @ts-ignore
    const searchList = yield call(getRequest, `${apiSearch + queryFilter}`);
    if (searchList) {
      // @ts-ignore
      if (typeof states.payload.type !== 'string') {
        yield put(searchSuccess(searchList.data));
      } else {
        // @ts-ignore
        yield put(getObjectSuccess(searchList.data));
      }
    }
  } catch (error) {
    yield put(searchFailure(error));
  }
}

export function* wathSearchAsync() {
  yield takeLatest(searchRequest.type, getSearch)
}
