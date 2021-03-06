import {noop} from 'lodash'

export default function(overrides = {}) {
  return {
    anyTouched: overrideOr(overrides, 'anyTouched', true),
    asyncValidating: overrideOr(overrides, 'asyncValidating', true),
    asyncValidate: overrideOr(overrides, 'asyncValidate', spy()),
    autofill: overrideOr(overrides, 'autofill', spy()),
    blur: overrideOr(overrides, 'blur', spy()),
    change: overrideOr(overrides, 'change', spy()),
    clearAsyncError: overrideOr(overrides, 'clearAsyncError', spy()),
    clearSubmit: overrideOr(overrides, 'clearSubmit', spy()),
    destroy: overrideOr(overrides, 'destroy', spy()),
    dispatch: overrideOr(overrides, 'dispatch', spy()),
    dirty: overrideOr(overrides, 'dirty', true),
    form: overrideOr(overrides, 'form', 'testForm'),
    handleSubmit: overrideOr(overrides, 'handleSubmit', stub().returns(noop)),
    initialized: overrideOr(overrides, 'initialized', true),
    initialize: overrideOr(overrides, 'initialize', spy()),
    pristine: overrideOr(overrides, 'pristine', true),
    untouch: overrideOr(overrides, 'untouch', spy()),
    onSubmit: overrideOr(overrides, 'onSubmit', stub().returns(noop)),
    pure: overrideOr(overrides, 'pure', true),
    submit: overrideOr(overrides, 'submit', spy()),
    submitting: overrideOr(overrides, 'submitting', true),
    submitFailed: overrideOr(overrides, 'submitFailed', true),
    submitSucceeded: overrideOr(overrides, 'submitSucceeded', true),
    clearFields: overrideOr(overrides, 'clearFields', spy()),
    resetSection: overrideOr(overrides, 'resetSection', spy()),
    clearSubmitErrors: overrideOr(overrides, 'clearSubmitErrors', spy()),
    valid: overrideOr(overrides, 'valid', true),
    reset: overrideOr(overrides, 'reset', spy()),
    touch: overrideOr(overrides, 'touch', spy()),
    invalid: overrideOr(overrides, 'invalid', true),
  }
}
