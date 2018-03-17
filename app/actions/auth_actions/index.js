import request from '_lib/request'
import urls from 'config/urls'
import * as types from 'action_constants/auth'

export const signIn = (payload) => (dispatch, getState) => {
  return request.post(urls.account.singin, payload)
    .then(({token}) => {
      dispatch({
        type: types.SET_SESSION,
        token,
      })
    })
}