import React, { useState } from 'react';
import { auth } from '../../../firebase';

const SignIn = ({ toggleAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //TODO: 
  //input valdidation
  //error handling

  const signInHandler = () => {
    console.log(email, password);

    auth.signInWithEmailAndPassword(email, password).then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }


  return (
    <>
      <div className="form">
        <h2 className="form__header">Welcome Back</h2>
        <p className="form__text">Sign in and create canvases!</p>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={event => { setEmail(event.target.value) }} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={event => { setPassword(event.target.value) }} />
        </div>
        <button className="btn btn-primary" onClick={signInHandler}>Sign In</button>
      </div>
      <p className="form__text">Don't have an account? <span className="blue-text icon" onClick={toggleAuth}>Sign Up.</span></p>
    </>
  );

};

export default SignIn;