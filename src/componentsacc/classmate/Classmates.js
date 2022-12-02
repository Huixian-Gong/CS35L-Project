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
          &nbsp;
          <div className={style.txtt}>{"Email:"} &nbsp;
            {u.userEmail}
          </div>
          &nbsp;
          <div className={style.txt}>Lecture: &nbsp;
            {u.lecNumber} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          &nbsp;
          <div className={style.txt}>Name: &nbsp;
            {u.userName}
          </div>
          &nbsp;
        </div>
        <div>
          {send ? <div><textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            className={style.textarea} placeholder={"  Say hi to your new classmates!"}>
              </textarea> 
              <div>&nbsp;</div>
                <button className={style.button} type='submit' onClick={createMessage}>
                  Send&nbsp;
                </button>
                <button 
                  className={style.scbutton}
                  type='submit'
                  onClick={handleClick}>
                  {send ? "Close" : ""}
                </button>
              </div>
            : <button 
                className={style.sdbutton}
                type='submit'
                onClick={handleClick}>
                {/* {send ? "" : "Send Message"} */}
                Send Message
              </button>
          }
        
        
        
        </div>
      </Block>
      &nbsp;
    </div>
  );
};

export default Classmates;