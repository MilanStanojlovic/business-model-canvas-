import React, { useState } from 'react';
import { auth, db } from '../../../firebase';

const SignUp = ({ toggleAuth, toggle }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //TODO:
  //error handling 
  //input validation

  const registrationHandler = () => {
    // console.log(fullName, email, password);
    // const auth = firebase.auth();


    auth.createUserWithEmailAndPassword(email, password).then(response => {
      // console.log(response);
      response.user.updateProfile({
        displayName: fullName
      })

      db.collection('users').doc(response.user.uid).set({
        email,
        fullName,
      }).then(() => { }, error => {
        console.log('error collection', error)
      });

      toggle();
    }, error => {
      console.log(error);
    });

  }


  return (
    <>
      <div className="form">
        <h2 className="form__header">Join Business Model</h2>
        <p className="form__text">Sign up and create your models!</p>
        <div>
          <input type="text" placeholder="Full Name" value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
        </div>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
        </div>
        <button className="btn btn-primary" onClick={registrationHandler}>Sign Up</button>
      </div>
      <p className="form__text">Already have an account? <span className="blue-text icon" onClick={toggleAuth}>Sign in.</span></p>
    </>
  )
}

export default SignUp;