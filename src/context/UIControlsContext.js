import React, { useState, createContext } from 'react';

export const UiControlsContext = createContext();

export const UiControlsProvider = ({ children }) => {
  const [displaySaveModal, setDisplaySaveModal] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [displayBackdrop, setDisplayBackdrop] = useState(false);

  const toggleAuth = () => {
    setDisplayAuth(displayAuth => !displayAuth);
  }

  const toggleSave = () => {
    setDisplaySaveModal(displaySaveModal => !displaySaveModal);
  }

  const toggleSidebar = () => {
    setDisplaySidebar(displaySidebar => !displaySidebar);
  }

  const toggleBackdrop = () => {
    setDisplayBackdrop(displayBackdrop => !displayBackdrop);
  }

  return (
    <UiControlsContext.Provider value={{
      displaySaveModal,
      setDisplaySaveModal,
      displayAuth,
      setDisplayAuth,
      displayBackdrop,
      setDisplayBackdrop,
      displaySidebar,
      setDisplaySidebar,

      toggleAuth,
      toggleSave,
      toggleSidebar,
      toggleBackdrop
    }}>
      { children}
    </UiControlsContext.Provider >
  )
}
