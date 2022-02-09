import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
