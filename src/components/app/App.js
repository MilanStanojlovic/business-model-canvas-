import React from 'react';
import './App.module.scss';
import BusinessModel from '../business-model/businessModel';
import { UserProvider } from '../../context/UserContext';
import { UiControlsProvider } from '../../context/UIControlsContext';
// import { UserContext } from '../context/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <UiControlsProvider>
          <BusinessModel />
        </UiControlsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
