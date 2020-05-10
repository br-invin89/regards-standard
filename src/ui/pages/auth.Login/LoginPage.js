import React from 'react';

import AuthPageLayout from 'ui/containers/AuthPageLayout';
import LoadInit from './LoadInit';
import LoginForm from './LoginForm';

class LoginPage extends React.PureComponent {
  render() {
    return (
      <AuthPageLayout>
        <LoadInit />
        <LoginForm />
      </AuthPageLayout>
    )
  }
}

export default LoginPage;
