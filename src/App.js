import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import SingleBlog from './pages/Blog/SingleBlog';
import Story from './pages/Story/Story';
import Consultation from './pages/Consultation/Consultation';
import Approach from './pages/Approach/Approach';
import Service from './pages/Service/Service';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery/" component={Gallery} />
    <Route path="/blog/" component={Blog} />
    <Route path="/single-blog/" component={SingleBlog} />
    <Route path="/our-story/" component={Story} />
    <Route path="/consultation/" component={Consultation} />
    <Route path="/our-approach" component={Approach} />
    <Route path="/our-services" component={Service} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default App;
