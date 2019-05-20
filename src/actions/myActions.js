import * as types from './actionTypes';

export function requestApiData(url) { 
    return { type: types.REQUEST_DATA, url } 
};

export function receiveApiData(data) { 
    return { type: types.RECEIVE_DATA, data }
};
