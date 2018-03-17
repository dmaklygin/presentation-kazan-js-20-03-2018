import reducer, {initialState, __RewireAPI__} from '.';
import * as types from 'action_constants/auth';

describe('AuthReducer', () => {
  let token, Cookies

  beforeEach(() => {
    Cookies = {
      get: () => 'testCookie',
      set: spy(),
    };

    token = 'TOKEN_1';

    __RewireAPI__.__set__({
      Cookies,
    });
  });

  afterEach(() => {
    __RewireAPI__.__ResetDependency__('Cookies');
  });

  context('when undefined called with', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, {})).to.equal(initialState)
    });
  });

  context('when `types.SET_SESSION` called with', () => {
    it('returns new state', () => {
      expect(reducer(initialState, {type: types.SET_SESSION, token})).to.eql({
        token,
      })
    });

    it('calls #Cookies.set', () => {
      reducer(initialState, {type: types.SET_SESSION, token});

      expect(Cookies.set).to.be.calledOnce;
      expect(Cookies.set).to.be.calledWith('token', token, match({expires: 315360000}));
    });
  })
});