import React from 'react';

import AppRouter from './route/App';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
