import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import store from './store';
import App from './App';
import './css/main.css';

const history = createBrowserHistory();
const app = document.getElementById('edward-consulting-app');

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app,
);
