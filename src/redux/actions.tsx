import {User} from '../types';
import {FOLLOW_USER, BLOCK_USER} from './actionTypes';

export const followUser = (user: User) => ({
  type: FOLLOW_USER,
  payload: user,
});

export const blockUser = (user: User) => ({
  type: BLOCK_USER,
  payload: user,
});
