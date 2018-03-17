import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import PrivateRoute from 'components/_lib/private_route'

import App from './app'
import Public from './public'

import './index.scss';

const Components = () => (
  <div className="main-container">
    <Switch>
      <PrivateRoute path="/app" component={App}/>
      <Route path="/" component={Public}/>
    </Switch>
  </div>
)

export default Components
