import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Meetups from './pages/users/Meetups';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/meetups" component={Meetups} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default Routes;
