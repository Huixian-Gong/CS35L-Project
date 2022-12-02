import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import style from './ResetPassword.module.css'

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const [match, setMatch] = useState(true);
  
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if(email != "") {
      try {
        await sendPasswordResetEmail(auth, email);
        navigate('/login')
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
      setMatch(true)
    }
    else {
      setMatch(false)
    }
  };

  return (
    <main className={style.main}>
      <form onSubmit={handleSubmit}>
        <div className={style.inner}>
        <div className={style.group}>
        <h2>Reset Password</h2>
        {(error == "Firebase: Error (auth/user-not-found).") ? ( <div className={style.error}>{"Error, No such user"}</div> ) : ""}
        {match ? "" : ( <div className={style.error}>{"Error, passwords doesn't match"}</div> )}
          <label className={style.group}>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Your email'
          />
          </div>
          <div> &nbsp;</div>
        <button type="submit"> Send </button>
        </div>
      </form>
    </main>
  );
};

export default ResetPassword;
