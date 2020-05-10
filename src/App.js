import React from 'react';
import AppRoutes from './ui/routes';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from 'epics/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
