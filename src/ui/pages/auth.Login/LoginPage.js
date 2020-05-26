import React from 'react';

import PageLayout from 'ui/modules/auth/PageLayout';
import LoadInit from './LoadInit';
import LoginForm from './LoginForm';

class LoginPage extends React.PureComponent {
  render() {
    return (
      <PageLayout>
        <LoadInit />
        <LoginForm />
      </PageLayout>
    )
  }
}

export default LoginPage;
