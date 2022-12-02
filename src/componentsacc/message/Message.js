import React, { useState } from "react";
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
import Chat from './Chat.js';
import style from '../classmate/Classmates.module.css';

function Message(user){
  const [messages, setMessages] = useState([]);
  const [control, setControl] = useState(true);

  const deleteMessage = async(id) => {
    await deleteDoc(doc(db, 'Message', id));
    setControl(true);
  };

  if(control){
    console.log("inside");
    const q1 = query(collection(db,"Message"), where("receiverEmail","==", user.user));
    const getUsers = async () => {
      const data = await getDocs(q1);
      setMessages(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getUsers();
    setControl(false);
  }

  console.log(messages);

    return(
      <div>
        {messages.length == 0 ? <h2> No Message</h2> : 

          <h2> Your Message</h2>
        }
        {messages.length == 0 ? null : 

        messages.map((m, index) => (
        <Chat
          key={index}
          m={m}
          deleteMessage={deleteMessage}
        />
        ))

}
      </div>
    );
}

export default Message;

