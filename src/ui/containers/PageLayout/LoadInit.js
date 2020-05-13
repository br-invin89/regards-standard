import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { callGetApiWithAuth } from 'utils/api';

const LoadInit = () => {
	const dispatch = useDispatch();
  
  useEffect(() => {    
    // check logged in  
    const setLoggedIn = payload => {
      dispatch({ type: 'auth.SET_LOGGED_IN', payload });
    }
    callGetApiWithAuth('user', setLoggedIn);
  }, []);

	return (
		<Helmet>
      <title>Regards! | E2B Business</title>
    </Helmet>
	)
}

export default LoadInit;
