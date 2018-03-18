import request from '_lib/request';
import urls from 'config/urls';
import * as types from 'action_constants/auth';
import {errorResponse} from 'actions/error_actions';
import {SubmissionError} from 'redux-form';

export const signIn = (payload) => (dispatch) => {
  return request.post(urls.account.singin, payload)
    .then(({token}) => {
      dispatch({
        type: types.SET_SESSION,
        token,
      });
    })
    .catch((e) => {
      dispatch(errorResponse(e));

      throw new SubmissionError({_error: e});
    });
};