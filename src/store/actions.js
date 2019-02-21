import actionTypes from './actionTypes';

export const getUserData = () => async (dispatch, getState, { API}) => {
  dispatch({
    type: actionTypes.GET_USER_DATA,
    payload: ''
  })
} 