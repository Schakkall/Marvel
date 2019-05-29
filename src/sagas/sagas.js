import { call, put, delay, takeEvery} from 'redux-saga/effects';
import {END} from 'redux-saga';

import { REQUEST_DATA } from '../actions/actionTypes';
import { receiveApiData } from '../actions/myActions';

import { fetchData } from '../requester/requester';

function* getApiData(action) {
  try {
    const data = yield call(fetchData, action.url);
    //It's possible yield a delay
    // yield put(waiting)
    // Use take for wait for new action
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(REQUEST_DATA, getApiData);
}