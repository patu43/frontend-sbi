// App.jsx

import React from 'react';
import Login from './pages/kyc';
import logo from './assets/logo.png'
import './App.css';

function App() {
  return (
    <div>
      <header>
        <center>
        <img src={logo} alt="logo" />
        </center>
       </header>
      <main>
        <Login /> {/* Render the kyc component */}
      </main>
    </div>
  );
}

export default App;
