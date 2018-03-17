import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import syncMatchers from 'chai-sync-layer-suite/src/sync_matchers';
import reduxFormPTHelper from './helpers/redux_form_props';
import chaiShallowDeepEqual from 'chai-shallow-deep-equal';
import getMockStore from './helpers/get_mock_store';
import chaiAsPromise from 'chai-as-promised';
import fixtures from './fixtures';

Enzyme.configure({adapter: new Adapter()});

// chai.use(syncMatchers)
chai.use(chaiShallowDeepEqual);
chai.use(chaiAsPromise);

window.React = React;
window.getMockStore = getMockStore;
window.reduxFormPTHelper = reduxFormPTHelper
window.spy = sinon.spy;
window.stub = sinon.stub;
window.mock = sinon.mock;
window.match = sinon.match;
window.fixtures = fixtures;

window.overrideOr = (overrides, key, defaultValue) => {
  return overrides.hasOwnProperty(key) ? overrides[key] : defaultValue;
}

const testsContext = require.context('../app', true, /\.\/.*\/test\.js$/);
testsContext.keys().forEach(testsContext);
