import React, { useState, useEffect } from 'react';
import Classmates from './Classmates';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  where,
  getDocs
} from 'firebase/firestore';
import style from './FindClassmate.module.css'

function FindClassmate(user) {
  const email = user.user
  const [users,setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [CN, setCN] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setCN(message);
    setMessage("");
    console.log("coursename : ",CN);
  };

  if(CN != ""){
    console.log("user.email : ",user.user)
    const q = query(collection(db,CN),where("userEmail","!=", user.user));
    const getUsers = async () => {
      const data = await getDocs(q);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getUsers();
    setCN("");
    console.log(users);
  }

  return (
    <div>
        <div>
          <h2>Find Classmate</h2>
          </div>
          <div>
            <label>Course Name : </label>
            <input
                className={style.input}
                onChange={handleChange}
                value={message}
                type='text'
                placeholder='Search Class'
            />
            &nbsp;
            <button className={style.button} type="submit" onClick={handleClick}>Search</button>  
          </div>
          &nbsp;
          {users.map((u, index) => (
            <Classmates
              key={index}
              u={u}
              email={email}
            />
          ))}
    </div>
  );
}

export default FindClassmate;