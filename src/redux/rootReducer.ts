import {combineReducers} from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  following: userReducer,//add more reducers
});

export default rootReducer;
