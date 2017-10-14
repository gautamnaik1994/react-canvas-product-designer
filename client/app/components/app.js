import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../styles/app.scss';
import LandingPage from './landing_page';
import WorkArea from './workArea';

const App = () => (
  <div>
    <div className="container">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/workarea" component={WorkArea} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
