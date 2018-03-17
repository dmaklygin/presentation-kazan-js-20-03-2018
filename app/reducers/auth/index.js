import Cookies from 'cookies-js';
import * as types from 'action_constants/auth';

export const initialState = {
  token: Cookies.get('token'),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_SESSION:
      return setSession(state, action.token);
  }
  return state;
}

const setSession = (state, token) => {
  setAccessToken(token);

  return {
    ...state,
    token,
  }
}

function setAccessToken(token) {

  const cookiesProps = {
    expires: 10 * 365 * 24 * 60 * 60
  };

  Cookies.set('token', token, cookiesProps);
}
