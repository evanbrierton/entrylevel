import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Main;
