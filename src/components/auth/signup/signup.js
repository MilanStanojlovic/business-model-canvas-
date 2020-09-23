import React, { useState, useContext } from 'react';
import { auth, db } from '../../../firebase';
import useForm from '../../../hooks/useForm';
import { form } from '../../../enum/form';
import { UiControlsContext } from '../../../context/UIControlsContext';

const SignUp = () => {
  const [error, setError] = useState('');
  const { toggleAuth } = useContext(UiControlsContext);

  const signUpHandler = () => {
    auth.createUserWithEmailAndPassword(values.email, values.password).then(response => {
      response.user.updateProfile({
        displayName: values.fullName
      })

      db.collection('users').doc(response.user.uid).set({
        email: values.email,
        fullName: values.fullName
      })

      toggleAuth();
    }, error => {
      setError(error.message);
    });
  }

  const signupFields = { fullName: '', email: '', password: '' };
  const { values, handleChange, handleSubmit, errors } = useForm(signUpHandler, signupFields, form.SIGN_UP);

  return (
    <form className="form" noValidate>
      <h2 className="form__header">Join Business Canvas</h2>
      <p className="form__text">Sign up and create your models!</p>
      {error && <p className="form__error">{error}</p>}
      <div>
        <input type="text"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          className={`${errors.fullName && "form__invalid"}`} />
        {errors.fullName && <span className="form__error">{errors.fullName}</span>}
      </div>
      <div>
        <input type="email"
          placeholder="Email"
          value={values.email}
          name="email"
          onChange={handleChange}
          className={`${errors.email && "form__invalid"}`} />
        {errors.email && <span className="form__error">{errors.email}</span>}
      </div>
      <div>
        <input type="password"
          placeholder="Password"
          value={values.password}
          name="password"
          onChange={handleChange}
          className={`${errors.password && "form__invalid"}`} />
        {errors.password && <span className="form__error">{errors.password}</span>}
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
    </form>
  )
}

export default SignUp;