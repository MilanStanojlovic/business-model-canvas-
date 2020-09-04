import React from 'react';

const SignIn = ({ toggleAuth }) => {
  return (
    <>
      <div className="form">
        <h2 className="form__header">Welcome Back</h2>
        <p className="form__text">Sign in and create canvases!</p>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn btn-primary">Sign In</button>
      </div>
      <p className="form__text">Don't have an account? <span className="blue-text icon" onClick={toggleAuth}>Sign Up.</span></p>
    </>
  );

};

export default SignIn;