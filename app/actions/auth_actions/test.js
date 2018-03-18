import {
  signIn,
  __RewireAPI__,
} from '.';
import * as types from 'action_constants/auth'

describe('AuthActions', () => {
  let store, request, token, urls, payload;

  beforeEach(() => {
    store = getMockStore();

    token = 'TOKEN_1';

    request = {
      post: spy(() => Promise.resolve({token}))
    };

    urls = {
      account: {
        singin: 'SIGN_IN'
      }
    };

    payload = {username: 'USERNAME_1', password: 'PASSWORD_1'};

    __RewireAPI__.__set__({
      request,
      urls
    });
  });

  afterEach(() => {
    store.clearActions();

    __RewireAPI__.__ResetDependency__('request');
    __RewireAPI__.__ResetDependency__('urls');
  })

  describe('#signIn', () => {
    it('', () => {
      return store.dispatch(signIn(payload)).then(() => {
        expect(request.post).to.be.calledOnce;
        expect(request.post).to.be.calledWith(urls.account.singin, payload);
      })
    });

    context(' ', () => {
      it('calls "types.SET_SESSION" action', () => {
        return store.dispatch(signIn(payload)).then(() => {
          const actions = store.getActions()

          expect(actions[0]).to.eql({
            type: types.SET_SESSION,
            token,
          })
        })
      })
    });

    context('when #request.post has thrown an error', () => {
      let error = 'ERROR_1', errorResponse, SubmissionError;

      beforeEach(() => {
        request = {
          post: spy(() => Promise.reject(error)),
        };

        errorResponse = spy(() => ({type: 'ERROR'}));

        SubmissionError = spy();

        __RewireAPI__.__set__({request, errorResponse, SubmissionError})
      });

      afterEach(() => {
        __RewireAPI__.__ResetDependency__('errorResponse');
        __RewireAPI__.__ResetDependency__('SubmissionError');
      });

      it('calls #errorResponse action', () => {
        return store.dispatch(signIn(payload)).catch(() => {
          expect(errorResponse).to.be.calledOnce;
          expect(errorResponse).to.be.calledWith(error);
        })
      });

      it('calls #SubmissionError', () => {
        return store.dispatch(signIn(payload)).catch(() => {
            expect(SubmissionError).to.be.calledOnce;
            expect(SubmissionError).to.be.calledWith({_error: error});
          });
      });
    });
  });
});