import React, {Component} from 'react'
import PT from 'prop-types'
import PublicRoute from 'components/_lib/public_route'
import {Switch, Redirect} from 'react-router-dom'

import Login from './login'

import './index.scss';

export default class Public extends Component {
  render() {
    return (
      <div className="public-container">
        <Switch>
          <PublicRoute path="/login" component={Login} />
          <Redirect exact from="/" to="/login" />
        </Switch>
      </div>
    )
  }
}
