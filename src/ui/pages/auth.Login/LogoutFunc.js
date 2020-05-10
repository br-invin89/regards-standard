import React from 'react';
import { useDispatch } from 'react-redux';
import { removeToken } from 'epics/utils';
import {
  useHistory
} from 'react-router-dom';

const LogoutFunc = () => {
  const dispatch = useDispatch();
  removeToken();
  dispatch({ type: 'auth.LOGOUT' });
  const history = useHistory();
  history.push('/');
  return (
    <>
    </>
  )
}

export default LogoutFunc;
