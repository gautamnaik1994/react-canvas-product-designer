import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import '../styles/app.scss';
import Header from './common/header';
import LandingPage from './landing_page';
import WorkArea from './workArea';

const App = () => (
  <div>
    <Header />
    <div className="">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/workarea" component={WorkArea} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

export default App;
