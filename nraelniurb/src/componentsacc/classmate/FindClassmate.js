import React, { useState, useEffect } from 'react';
import Classmates from './Classmates';

function FindClassmate({user}) {

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

  return (
    <div>
        <div>Find Classmate</div>
          <div>
            <label>Course Name : </label>
            <input
                onChange={handleChange}
                value={message}
                type='text'
                placeholder='Search Class'
            />
            <button onClick={handleClick}>Search</button>  
          </div>
          <Classmates/>
    </div>
  );
}
//<Classmates email={user.email} classname={CN}/>
export default FindClassmate;
//
            // {td.map(() => (
            //   <Classmates
            //     email={user.email}
            //     classname={input}
            //   />
            // ))}