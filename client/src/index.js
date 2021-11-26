import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';

import App from './App';
import './styles/index.css';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider
        value={{
          user: new UserStore(),
          device: new DeviceStore(),
        }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
