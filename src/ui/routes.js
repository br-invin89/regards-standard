import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/auth.Login';
import LogoutFunc from './pages/auth.Login/LogoutFunc';

const AppRouters = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/auth/login' component={LoginPage} />
      <Route path='/auth/logout' component={LogoutFunc} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>
)

export default AppRouters
