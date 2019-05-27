import { RECEIVE_DATA } from '../actions/actionTypes';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_DATA:
      state = data;
      return state;
    default:
      return state;
  }
};