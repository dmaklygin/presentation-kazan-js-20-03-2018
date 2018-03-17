import request from '_lib/request'
import urls from 'config/urls'
import * as types from 'action_constants/users'
import {errorResponse} from 'actions/error_actions'

export const fetchUsers = () => (dispatch, getState) => {
  return request.get(urls.users.fetch)
    .then(({users}) => {
      dispatch({
        type: types.SET_USERS,
        users,
      })
    })
    .catch((e) => dispatch(errorResponse(e)))
}