const Request = {
  get(url, payload, state) {
    return Promise.resolve({
      users: [
        {
          id: 1,
          name: 'NAME_1',
          active: false,
        },
        {
          id: 2,
          name: 'NAME_2',
          active: true,
        },
        {
          id: 3,
          name: 'NAME_3',
          active: true,
        }
      ]
    });
  },

  post(url, payload, state) {
    if (payload.username === 'LOGIN_1') {
      return Promise.resolve({
        token: 'TOKEN_1'
      });
    } else {
      return Promise.reject({
        message: 'Login is not found'
      });
    }
  }
};

export default Request
