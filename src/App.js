import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery/" component={Gallery} />
    <Route path="/blog/" component={Blog} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default App;
