import React from 'react';
import { auth } from '../../../firebase';
import useForm from '../../../hooks/useForm';

const SignIn = ({ toggle }) => {

  const signInHandler = () => {
    auth.signInWithEmailAndPassword(values.email, values.password).then(() => {
      toggle();
    }, error => {
      console.log(error);
    });
  }

  const signInInputs = { email: '', password: '' };
  const { values, handleChange, handleSubmit } = useForm(signInHandler, signInInputs, false);


  return (
    <form className="form" noValidate>
      <h2 className="form__header">Welcome Back</h2>
      <p className="form__text">Sign in and create canvases!</p>
      <div>
        <input type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
    </form>
  );

};

export default SignIn;