import './App.css';

import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import Home from './containers/home';
import ModalApp from './components/modal';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
