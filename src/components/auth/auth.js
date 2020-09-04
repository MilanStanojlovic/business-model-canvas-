import React, { useState } from 'react';
import style from './auth.module.scss';
import SignUp from './signup/signup';
import SignIn from './signin/signin';

const Auth = () => {
  const [showRegistration, setShowRegistration] = useState(true);

  const handleToggleAuth = () => {
    setShowRegistration(!showRegistration);
  }

  return (
    <div className={style.auth}>
      {showRegistration ? <SignUp toggleAuth={handleToggleAuth} /> : <SignIn toggleAuth={handleToggleAuth} />}
    </div>
  )
}

export default Auth;