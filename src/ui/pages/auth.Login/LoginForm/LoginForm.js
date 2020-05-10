import React from 'react';
import {
  Form,
  Button,
  Input,
  Typography,
  message
} from 'antd';
import { useHistory } from 'react-router-dom';
import { FormContainerStyled as Container } from './styled';
import { formLayout, actionLayout } from './const';
import { callPostApi, saveToken } from 'epics/utils';

const LoginForm = (props) => {
  const history = useHistory();
  const onTryLogin = formData => {
    message.loading('Logging now...', 0);
    callPostApi('auth/signin', formData, onLoginSuccess, onLoginFailure);
  }
  const onLoginSuccess = data => {
    saveToken(data.token);
    message.destroy();
    message.success('Logged in Successfully', 0.5);
    setTimeout(() => {
      history.push('/');
    }, 1500);
  }
  const onLoginFailure = errorMessage => {
    message.destroy();
    message.error(errorMessage, 2.5);
  }
  const onInvalidate = errorInfo => {
    console.error('Validation error: ', errorInfo);
  }  

  return (
    <Container>
      <Form {...formLayout}
        name="loginForm"
        onFinish={onTryLogin}
        onFinishFailed={onInvalidate}
      >
        <Typography.Title level={3}>Login Form!</Typography.Title>
        <Form.Item
          label="Username" name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password" name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...actionLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default React.memo(LoginForm);
