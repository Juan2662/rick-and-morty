import React from 'react';
import './App.css';

import Header from './components/Header'
import Characters from './components/Characters'

function App ()  {
  

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Characters />
      </div>
    </div>
  );
  
}

export default App;
