import {combineReducers} from 'redux';
import connectionsReducer from './connectionsReducer';

const rootReducer = combineReducers({
  following: connectionsReducer,
});

export default rootReducer;
