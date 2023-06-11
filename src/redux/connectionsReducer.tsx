import {FOLLOW_USER, BLOCK_USER, UNFOLLOW_USER} from './actionTypes';

const initialState = {
  following: [],
  blocked: [],
};

const connectionsReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        following: [...state.following, action.payload],
      };
    case BLOCK_USER:
      return {
        ...state,
        blocked: [...state.blocked, action.payload],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following: state.following.filter(userId => userId !== action.payload),
      };
    default:
      return state;
  }
};

export default connectionsReducer;
