// src/reducers/index.js
import { combineReducers } from 'redux';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  // Add other reducers here
});

export default rootReducer;
