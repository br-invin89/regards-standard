import React from 'react';
import { useSelector } from 'react-redux';
import {
  ContainerStyled as Container,
  LinkStyled as Link
} from './styled';

const TopBar = () => {
  const user = useSelector(state => state.auth.user);

  if (user) {
    return (
      <Container>
        <span>{user.username}</span>
        <Link to={'/auth/logout'}>Logout</Link>
      </Container>
    )
  }
  return (
    <Container>
      <Link to={'/auth/login'}>Login</Link>
    </Container>
  )
}

export default TopBar;
