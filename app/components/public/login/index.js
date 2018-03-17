import React, {Component} from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {
  reduxForm,
  getFormValues,
  getFormInitialValues,
  Form,
  propTypes as reduxFormPropTypes,
  Field,
  SubmissionError,
} from 'redux-form';
import {required} from '_lib/validation';
import {withRouter} from 'react-router';
import {createSelector} from 'reselect';
import {bindActionCreators} from 'redux';
import * as authActions from 'actions/auth_actions';
import Button from 'components/_lib/button';
import Error from 'components/_lib/error';
import './index.scss';

export class Login extends Component {
  static propTypes = {
    ...reduxFormPropTypes,
    signIn: PT.func.isRequired,
  };

  componentWillMount() {
    this.props.initialize({})
  }

  handleOnSubmit = (payload) => {
    return this.props.signIn(payload)
      .then(() => {
        this.props.history.push('/')
      })
      .catch(() => {
        throw new SubmissionError({
          _error: 'Логин или пароль введены неверно'
        })
      })
  }

  render() {
    const {handleSubmit, pristine, invalid, submitting, submitFailed} = this.props

    return (
      <div className="app-login">
        <Form onSubmit={handleSubmit(this.handleOnSubmit)} autoComplete="on" name="loginForm">
          {submitFailed && <Error message="Логин или пароль введены неверно" />}

          <Field
            component="input"
            type="text"
            name="username"
            validate={[required]}
            className="form-control"
            placeholder="Логин"
          />

          <Field
            component="input"
            type="password"
            name="password"
            placeholder="Пароль"
            validate={[required]}
            className="form-control"
          />

          <Button
            value="Войти"
            disabled={pristine || invalid || submitting}
            type="submit"
          />
        </Form>
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getFormValues('loginForm'),
  (fields) => ({fields})
)

const mapDispatchToProps = (dispatch) => ({
  signIn: bindActionCreators(authActions.signIn, dispatch),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({form: 'loginForm'})(Login)
  )
)
