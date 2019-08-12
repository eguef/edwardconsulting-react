import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home/Home';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
