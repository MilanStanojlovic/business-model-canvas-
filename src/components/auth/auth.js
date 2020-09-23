import React, { useState, useContext } from 'react';
import style from './auth.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import SignUp from './signup/signup';
import SignIn from './signin/signin';
import Backdrop from '../backdrop/backdrop';
import { UiControlsContext } from '../../context/UIControlsContext';

const Auth = () => {
  const [showRegistration, setShowRegistration] = useState(true);
  const { toggleAuth } = useContext(UiControlsContext);

  const handleToggleAuth = () => {
    setShowRegistration(!showRegistration);
  }

  return (
    <Backdrop>
      <div className={style.auth}>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" className={`${style.auth__close} icon`} onClick={toggleAuth} />
        {showRegistration ? <SignUp toggleAuth={handleToggleAuth} /> : <SignIn toggleAuth={handleToggleAuth} />}
        {showRegistration ? <p className={`${style.auth__message} form__text`}>Already have an account? <span className="blue-text icon" onClick={handleToggleAuth}>Sign in.</span></p> : <p className={`${style.auth__message} form__text`}>Don't have an account? <span className="blue-text icon" onClick={handleToggleAuth}>Sign Up.</span></p>}
      </div>
    </Backdrop>
  )
}

export default Auth;