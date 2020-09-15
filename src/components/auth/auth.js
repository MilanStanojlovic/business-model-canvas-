import React, { useState } from 'react';
import style from './auth.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import SignUp from './signup/signup';
import SignIn from './signin/signin';

const Auth = ({ toggle }) => {
  const [showRegistration, setShowRegistration] = useState(true);

  const handleToggleAuth = () => {
    setShowRegistration(!showRegistration);
  }

  return (
    <div className={style.auth}>
      <FontAwesomeIcon icon={faTimesCircle} size="lg" className="icon" onClick={toggle} />
      {showRegistration ? <SignUp toggleAuth={handleToggleAuth} toggle={toggle} /> : <SignIn toggleAuth={handleToggleAuth} toggle={toggle} />}
      {showRegistration ? <p className={`${style.auth__message} form__text`}>Already have an account? <span className="blue-text icon" onClick={handleToggleAuth}>Sign in.</span></p> : <p className={`${style.auth__message} form__text`}>Don't have an account? <span className="blue-text icon" onClick={handleToggleAuth}>Sign Up.</span></p>}
    </div>
  )
}

export default Auth;