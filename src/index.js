import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import ScrollToTop from 'react-router-scroll-top';
import store from './store';
import App from './App';
import './css/main.css';
import '@babel/polyfill';

const history = createBrowserHistory();
const app = document.getElementById('edward-consulting-app');

const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
if (path) {
  history.replace(path);
}

render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  app,
);
