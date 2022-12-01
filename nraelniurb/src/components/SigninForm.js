import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import style from "./SigninForm.module.css"

const Signin = ({ Login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      Login(email)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <main className={style.main}>
      <form onSubmit={handleSubmit}>
          <div className={style.inner}>
            <h2>Login</h2>
            {(error != "") ? ( <div className={style.error}>{"Invalid Email Address/Password"}</div> ) : ""}
            <div className={style.group}>
              <label htmlFor="email">Email Address</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                type='email'>
                </input>
            </div>
            <div className={style.group}>
              <label htmlFor="passward">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type='password'/>
            </div>
            <div> &nbsp;</div>
          <button type="submit"> Sign In </button>
          </div>
      </form>
    </main>
  );
};

export default Signin;
