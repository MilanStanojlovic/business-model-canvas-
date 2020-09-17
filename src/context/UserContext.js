import React, { useState, createContext, useEffect } from 'react';
import { auth } from '../firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // TODO: 
  // User photo?
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(null);
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}