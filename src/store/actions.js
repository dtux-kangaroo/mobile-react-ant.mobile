import actionTypes from './actionTypes';
import http from '@/utils/http'
import apiUrl from '@/constants/apiUrl';

const navData = (data) => ({
  type: actionTypes.GET_NAV_DATA,
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
  } catch (error) {
      console.log('error: ', error)
  }
}
// export const getNavData = (params) => async (dispatch, getState, {
//   dispatch({
//     type: actionTypes.GET_NAV_DATA,
//     payload: params
//   })
// })

// const userData = (data) => ({
//   type: actionTypes.GET_USER_DATA,
//   payload: ''
// })
// export const getUserData = (params) => async (dispatch, getState) => {
//   try {
//       let response = await http.get(apiUrl.getUserData, params);
//       if (response.success) {
//           await dispatch(userData(response.data));
//       } else {
//           //返回失败
//       }
//   } catch (error) {
//       console.log('error: ', error)
//   }
// }