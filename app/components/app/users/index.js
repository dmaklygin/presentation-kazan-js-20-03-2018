import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';
import {getActiveUsers} from 'selectors/users';
import * as usersActions from 'actions/users_actions';
import UsersList from './list';

export class Users extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return <UsersList users={this.props.users} />;
  }
}

// =====================================
//  CONNECT
// -------------------------------------

const mapStateToProps = createSelector(
  getActiveUsers,
  (users) => ({users})
)

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: bindActionCreators(usersActions.fetchUsers, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users)
