import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Establishment, Home } from '../scenes';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/establishments/:company/:establishment" component={Establishment} />
  </Switch>
);

export default Main;
