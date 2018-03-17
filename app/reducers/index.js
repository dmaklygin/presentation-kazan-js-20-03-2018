import {combineReducers} from 'redux'
import auth from 'reducers/auth'
import users from 'reducers/users'
import {reducer as form} from 'redux-form'

const appReducer = combineReducers({
  auth,
  users,
  form,
});

export default appReducer
