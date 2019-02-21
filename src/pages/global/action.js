import {globalType} from './constant';
// import { API } from "@/api/index.js"; // 引入会报错：ReferenceError: regeneratorRuntime is not defined
import http from '../../utils/http'
import apiUrl from 'constants/apiUrl';

const navData = (data) => ({
  type: globalType.GET_NAV_DATA,
  payload: data
})
export const getNavData = (params) => async (dispatch, getState) => {
  try {
    let response = await http.get(apiUrl.getNavList, params);
    if (response.success) {
        await dispatch(navData(response.data));
    } else {
        //返回失败
    }
    // API.getNavList(params).then(response =>{ 
    //   if (response.success) {
    //     dispatch(navData(response.data));
    //   } else {
    //     //返回失败
    //   }
    // }); 
  } catch (error) {
    console.log('error: ', error)
  }
}


