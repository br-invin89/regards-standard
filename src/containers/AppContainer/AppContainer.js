import React from 'react';
import AppRoutes from './routes';
import 'antd/dist/antd.css';

const AppContainer = ({ children, ...props }) => {
  return (
    <div className="App" {...props}>
      <AppRoutes />
      {children}
    </div>
  )  
}

export default AppContainer;
