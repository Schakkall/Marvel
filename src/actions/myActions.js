import * as types from './actionTypes';

export function requestApiData() { 
    return { type: types.REQUEST_DATA } 
};

export function receiveApiData(data) { 
    return { type: types.RECEIVE_DATA, data }
};
