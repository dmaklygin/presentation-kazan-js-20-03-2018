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
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Switch>
              <PublicRoute path="/login" component={Login} />
              <Redirect exact from="/" to="/login" />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
