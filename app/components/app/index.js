import React, {Component} from 'react'
import PT from 'prop-types'

import {Route, Redirect, Switch} from 'react-router-dom'
import PrivateRoute from 'components/_lib/private_route'

import Users from './users'
import './index.scss'

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          Nav Bar
        </header>
        <main>
          <div className="container app__container">
            <Switch>
              <PrivateRoute path="/app/users" component={Users} />
              <Redirect exact from="/app" to="/app/users" />
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}
