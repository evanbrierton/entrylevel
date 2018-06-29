import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Establishment, Home, NotFound } from '../scenes';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/establishments/:company/:establishment" component={Establishment} />
    <Route path="/404" component={NotFound} />
  </Switch>
);

export default Main;
