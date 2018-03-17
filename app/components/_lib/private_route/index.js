import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {getAccessToken} from 'selectors/auth'

class PrivateRoute extends Component {
  render() {
    const {component: ChildComponent, accessToken, ...rest} = this.props

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!accessToken) {
            return <Redirect to={{pathname: '/login'}} />
          }

          return <ChildComponent {...props} />
        }}
      />
    )
  }
}

const mapStateToProps = createSelector(getAccessToken, (accessToken) => ({accessToken}))

export default connect(mapStateToProps)(PrivateRoute)
