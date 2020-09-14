import React from 'react';
import './App.module.scss';
import BusinessModel from '../business-model/businessModel';
import { UserProvider } from '../context/UserContext';
// import { UserContext } from '../context/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <BusinessModel />
      </UserProvider>
    </div>
  );
}

export default App;
