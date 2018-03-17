import React from 'react';
import PT from 'prop-types';

const UsersList = ({users}) => {
  if (!users) {
    return 'Loading...';
  }

  return (
    <div className="users">
      {users.map((user) => (
        <div className="user">{user.name}</div>
      ))}
    </div>
  )
};

UsersList.propTypes = {
  users: PT.arrayOf(PT.shape({
    id: PT.number.isRequired,
    name: PT.string.isRequired,
    active: PT.bool.isRequired,
  }))
}

export default UsersList;