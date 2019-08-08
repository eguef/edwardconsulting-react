import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

const app = document.getElementById('edward-consulting-app');

const App = () => (
  <div>Testing that it works</div>
);

render(<Provider store={store}><App /></Provider>, app);
