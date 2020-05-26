import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import HomePage from 'ui/pages/Home'
import LoginPage from 'ui/pages/auth.Login'
import LogoutFunc from 'ui/modules/auth/Logout'

const AppRouters = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/logout" component={LogoutFunc} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default AppRouters
