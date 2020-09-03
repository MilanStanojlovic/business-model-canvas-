import React from 'react';

const SignUp = () => {
  return (
    <div className="form">
      <h2 className="form__header">Join Business Model</h2>
      <p className="form__text">Sign up and create your models!</p>
      <div>
        <input type="text" placeholder="Full Name" />
      </div>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <button className="btn btn-primary">Register</button>
    </div>
  )
}

export default SignUp;