import { analysisType } from './constant';
import { message } from 'antd';
import http from 'utils/http'
import apiUrl from 'constants/apis';
import { browserHistory } from 'react-router';

const userData = (data) => ({
  type: analysisType.GET_ANA_DATA,
  payload: ''
})
export const getUserData = (params) => async (dispatch, getState) => {
  try {
      let response = await http.get(apiUrl.getUserData, params);
      if (response.success) {
          await dispatch(userData(response.data));
      } else {
          //返回失败
      }
  } catch (error) {
      console.log('error: ', error)
  }
}