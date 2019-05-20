import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { REQUEST_DATA } from '../actions/actionTypes';
import { receiveApiData } from '../actions/myActions';

import { fetchData } from '../requester/requester';

function* getApiData(action) {
  try {
    console.log(action.url);
    const data = yield call(fetchData, action.url);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_DATA, getApiData);
}