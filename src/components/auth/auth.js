import React from 'react';
import style from './auth.module.scss';
import SignUp from './signup/signup';

const Auth = () => {
  return (
    <div className={style.auth}>
      <SignUp />
    </div>
  )
}

export default Auth;