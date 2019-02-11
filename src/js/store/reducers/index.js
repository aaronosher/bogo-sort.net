import { combineReducers } from 'redux';
import sortReducer from './sort';

const rootReducer =  combineReducers({
  sort: sortReducer,
});

export default rootReducer;