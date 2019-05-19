import * as types from './actionTypes';
import axios from axios;

export function requestApiData() { 
    return { type: REQUEST_DATA } 
};

export function receiveApiData(data) { 
    return { type: RECEIVE_DATA, data }
};
