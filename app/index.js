import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createHashHistory as createHistory} from 'history';
import configureStore from '_lib/configure_store';
import Components from 'components';

import './index.scss';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Components />
    </Router>
  </Provider>,
  document.getElementById('app')
);
