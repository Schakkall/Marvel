import { call, put, delay, takeEvery, takeLatest} from 'redux-saga/effects';

import { REQUEST_DATA } from '../actions/actionTypes';
import { receiveApiData } from '../actions/myActions';

import { fetchData } from '../requester/requester';

const axios = require('axios');

async function getData(url) {
  let result = await axios.get(url);
  return result;
}

function* getApiData(action) {
  try {
    const data = yield call(getData, action.url);
    //const data = yield call(fetchData, action.url);
    
    //It's possible yield a delay
    // yield put(waiting)
    // Use take for wait for new action
    //yield delay(2000);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeEvery(REQUEST_DATA, getApiData);
}