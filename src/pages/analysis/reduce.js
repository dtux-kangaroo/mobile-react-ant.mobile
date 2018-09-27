import { combineReducers } from 'redux';
import assign from 'object-assign';
import { analysisType } from './constant';
const initialState = {
  anaData: {},
};
 const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case analysisType.GET_ANA_DATA:
      return Object.assign({}, state, {
        anaData: payload,
      });
    default:
      return state;
  }
};
export default globalReducer;
