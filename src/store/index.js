
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import global from './reducer';
const appReducer = {
  global
};

const middleware = routerMiddleware(history);
const middlewares = [thunk, middleware];
const store = createStore(
  combineReducers({ routing: routerReducer, ...appReducer }),
  __PRODUCTION ? applyMiddleware(...middlewares): composeWithDevTools(applyMiddleware(...middlewares))
)
export default store;
