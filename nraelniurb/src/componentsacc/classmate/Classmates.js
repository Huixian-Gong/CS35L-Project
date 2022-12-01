import React ,{ useState } from 'react';
import Block from '../../ui/Block';
import style from './Classmates.module.css';
import { db } from '../../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  where
} from 'firebase/firestore';


const Classmates = ({ u ,email }) => {
  console.log("user: ",email);
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState('');

  console.log("user: ",email);
  console.log("email: ", );
  const createMessage = async (e) => {
    e.preventDefault(e);
    console.log("message:",message)
    await addDoc(collection(db, "Message"), {
      content: message,
      receiverEmail: u.userEmail,
      senderEmail: email
    });
    setMessage("");
  };

  function handleClick(event) {
    event.preventDefault();
    if(send) {
      setSend(false);
    }
    else {
      setSend(true);
    }
  }

  return (
    <div>
      <Block>
        <div>
          Email:&nbsp;
          {u.userEmail} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Lecture: &nbsp;
          {u.lecNumber} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Name: &nbsp;
          {u.userName}
        </div>
        &nbsp;
        <div>
          {send ? <div><textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            className={style.textarea}>
              </textarea> 
              <div>&nbsp;</div>
              <button className={style.button} type='submit' onClick={createMessage}>Send&nbsp;</button>
              </div>
            : ""
          }
        </div>
        <div>&nbsp;</div>
        <button 
          className={style.button}
          type='submit'
          onClick={handleClick}>
          {send ? "Close" : "Send Message"}
        </button>
      </Block>
      &nbsp;
    </div>
  );
};

export default Classmates;