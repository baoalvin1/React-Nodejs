import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';

import Project from './project';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/project" component={Project} />
  </Switch>
)

export default Main;
