import React, { useState } from 'react';
import { auth } from '../../../firebase';
import useForm from '../../../hooks/useForm';
import { form } from '../../../enum/form';

const SignIn = ({ toggle }) => {
  const [error, setError] = useState('');

  const signInHandler = () => {
    auth.signInWithEmailAndPassword(values.email, values.password).then(() => {
      toggle();
    }, error => {
      setError(error.message);
    });
  }

  const signInInputs = { email: '', password: '' };
  const { values, handleChange, handleSubmit, errors } = useForm(signInHandler, signInInputs, form.SIGN_IN);


  return (
    <form className="form" noValidate>
      <h2 className="form__header">Welcome Back</h2>
      <p className="form__text">Sign in and create canvases!</p>
      {error && <p className="form__error">{error}</p>}
      <div>
        <input type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={`${errors.email && "form__invalid"}`}
        />
        {errors.email && <span className="form__error">{errors.email}</span>}
      </div>
      <div>
        <input type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={`${errors.password && "form__invalid"}`}
        />
        {errors.password && <span className="form__error">{errors.password}</span>}
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Sign In</button>
    </form>
  );

};

export default SignIn;