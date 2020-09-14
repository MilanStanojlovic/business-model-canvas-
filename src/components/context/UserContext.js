import React, { useState, createContext, useEffect } from 'react';
import { auth } from '../../firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // TODO: 
  // CREATE USER OBJECT WITH EMAIL AND PASSWORD 
  //OPTIONAL: PHOTO
  const [user, setUser] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log('from context', user);
      if (user) {
        setUser(user.email);
      }
    });
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}