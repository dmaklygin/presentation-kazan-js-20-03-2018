import {
  getUsers,
  getActiveUsers,
  __RewireAPI__,
} from '.';

describe('Users selectors', () => {
  let users

  beforeEach(() => {
    users = fixtures.users
  })

  describe('#getUsers', () => {
    it('returns users', () => {
      const users = [{}]

      expect(getUsers({users})).to.equal(users)
    });
  });

  describe('#getActiveUsers', () => {
    it('expects correct arguments', () => {
      expect(getActiveUsers.args[0]).to.equal(getUsers);
    });

    it('returns active users', () => {
      const result = getActiveUsers.resultFunc(users)

      expect(result).to.eql([users[1], users[2]])
    });
  });
});