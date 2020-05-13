import React from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from 'utils/auth';

const LoadInit = () => {
  // check logged in
  const history = useHistory();
  if (getToken()) {
    history.push('/');
  }

  return (
    <>
    </>
  )
}

export default LoadInit;
