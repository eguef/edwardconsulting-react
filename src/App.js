import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery/" component={Gallery} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default App;
