import {Login, __RewireAPI__} from '.';
import {shallow} from 'enzyme';
import {required} from '_lib/validation';
import {Form, Field} from 'redux-form';
import Button from 'components/_lib/button';

describe('<Login />', () => {
  let props, wrapper, instance, payload, SubmissionError;

  beforeEach(() => {
    payload = {username: 1, password: 2};

    props = getProps();
    wrapper = shallow(<Login {...props} />);
    instance = wrapper.instance();

    SubmissionError = spy();

    __RewireAPI__.__set__({
      SubmissionError,
    })
  });

  afterEach(() => {
    __RewireAPI__.__ResetDependency__('SubmissionError');
  });

  describe('#componentWillMount', () => {
    it('calls #props.initialize', () => {
      expect(props.initialize).to.be.calledOnce;
      expect(props.initialize).to.be.calledWith({});
    });
  });

  describe('#handleOnSubmit', () => {
    context('when #props.signIn resolved', () => {
      it('calls #props.history.push', () => {
        return instance.handleOnSubmit.call(null, payload)
          .then(() => {
            expect(props.history.push).to.be.calledOnce;
            expect(props.history.push).to.be.calledWith('/');
          });
      });
    });

    context('when #props.signIn rejected', () => {
      it('calls #props.history.push', () => {
        props = getProps({
          signIn: () => Promise.reject(),
        });
        wrapper = shallow(<Login {...props} />);
        instance = wrapper.instance();

        return instance.handleOnSubmit.call(null, payload)
          .catch((err) => {
            const errorPayload = {
              _error: 'Логин или пароль введены неверно'
            }

            expect(SubmissionError).to.be.calledOnce;
            expect(SubmissionError).to.be.calledWith(errorPayload);
          });
      });
    });
  });

  describe('#render', () => {
    it('renders <Form />', () => {
      expect(wrapper.find(Form).props()).to.shallowDeepEqual({
        onSubmit: props.handleSubmit(),
        autoComplete: 'on',
        name: 'loginForm',
      });
    });

    it('renders username <Field />', () => {
      expect(wrapper.find(Field).at(0).props()).to.eql({
        component: 'input',
        type: 'text',
        name: 'username',
        validate: [required],
        className: 'form-control',
        placeholder: 'Логин',
      });
    });

    it('renders username <Field />', () => {
      expect(wrapper.find(Field).at(1).props()).to.eql({
        component: 'input',
        type: 'password',
        name: 'password',
        validate: [required],
        className: 'form-control',
        placeholder: 'Пароль',
      });
    });

    context('when prop `pristine` is `false`', () => {
      context('when prop `invalid` is `true`', () => {
        it('renders username <Button />', () => {
          props = getProps({
            pristine: false,
            invalid: true,
          });
          wrapper = shallow(<Login {...props} />);

          expect(wrapper.find(Button).props()).to.shallowDeepEqual({
            value: 'Войти',
            disabled: true,
            type: 'submit',
          });
        });
      });

      context('when prop `invalid` is `false`', () => {
        context('when prop `submitting` is `true`', () => {
          it('renders username <Button />', () => {
            props = getProps({
              pristine: false,
              invalid: false,
            });
            wrapper = shallow(<Login {...props} />);

            expect(wrapper.find(Button).props()).to.shallowDeepEqual({
              value: 'Войти',
              disabled: true,
              type: 'submit',
            });
          });
        });

        context('when prop `submitting` is `false`', () => {
          it('renders username <Button />', () => {
            props = getProps({
              pristine: false,
              invalid: false,
              submitting: false,
            });
            wrapper = shallow(<Login {...props} />);

            expect(wrapper.find(Button).props()).to.shallowDeepEqual({
              value: 'Войти',
              disabled: false,
              type: 'submit',
            });
          });
        });
      });
    });

    context('when prop `pristine` is `false`', () => {
      it('renders username <Button />', () => {
        expect(wrapper.find(Button).props()).to.shallowDeepEqual({
          value: 'Войти',
          disabled: true,
          type: 'submit',
        });
      });
    });
  });

  function getProps(overrides = {}) {
    return {
      ...reduxFormPTHelper(overrides),
      signIn: overrideOr(overrides, 'signIn', spy(() => Promise.resolve())),
      history: {
        push: spy(),
      },
    }
  }
});