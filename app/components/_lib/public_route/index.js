import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {getAccessToken} from 'selectors/auth'

class PublicRoute extends Component {
  render() {
    const {component: Component, accessToken, ...rest} = this.props

    return (
      <Route
        {...rest}
        render={(props) => {
          if (accessToken) {
            return <Redirect to="/app" />
          }

          return <Component {...props} />
        }}
      />
    )
  }
}

const mapStateToProps = createSelector(getAccessToken, (accessToken) => ({accessToken}))

export default connect(mapStateToProps)(PublicRoute)
