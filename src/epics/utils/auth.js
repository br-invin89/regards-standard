import cookie from 'react-cookies';

export const getToken = () => {
  const token = cookie.load('regard-auth-token');
  return token;
}

export const saveToken = (token) => {
  cookie.save('regard-auth-token', token, { path: '/'} );
}

export const removeToken = () => {
  cookie.remove('regard-auth-token', { path: '/' });
}
