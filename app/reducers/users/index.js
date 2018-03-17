import * as types from 'action_constants/users';

export const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERS:
      console.log('action: ', action)
      return action.users
  }
  return state
};