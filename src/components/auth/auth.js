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
    </div>
  )
}

export default Auth;