import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import style from './SignupForm.module.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/login')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.inner}>
        <div className={style.group}>
        <h2>Sign up</h2>
        {(error == "Firebase: Error (auth/invalid-email).") ? ( <div className={style.error}>{"Error, Please enter valid email"}</div> ) : ""}
        {(error == "Firebase: Password should be at least 6 characters (auth/weak-password).") ? ( <div className={style.error}>{"Error, password should be at least 6 characters"}</div> ) : ""}
          <label className={style.group}>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Example: JoeBruin@g.ucla.edu'
          />
          </div>
          <div className={style.group}>
            <label className='py-2 font-medium'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='border p-3'
              type='password'
            />
          </div>
          <div> &nbsp;</div>
        <button type="submit"> Sign Up </button>
        </div>
      </form>
    </main>
  );
};

export default Signup;
