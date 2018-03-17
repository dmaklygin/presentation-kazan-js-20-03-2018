import {createSelector} from '_lib/selector';

export const getUsers = ({users}) => users;

export const getActiveUsers = createSelector(
  getUsers,
  (users) => {
    return users ? users.filter((user) => user.active) : null
  }
);
