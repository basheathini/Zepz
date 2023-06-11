import {FOLLOW_USER, BLOCK_USER, UNFOLLOW_USER} from './actionTypes';

export const followUser = (userId: number) => ({
  type: FOLLOW_USER,
  payload: userId,
});

export const blockUser = (userId: number) => ({
  type: BLOCK_USER,
  payload: userId,
});

export const unfollowUser = (userId: number) => ({
  type: UNFOLLOW_USER,
  payload: userId,
});
