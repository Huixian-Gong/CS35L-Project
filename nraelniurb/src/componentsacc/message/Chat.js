import React, { useState } from 'react';
import style from './Chat.module.css'
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
import { FaRegTrashAlt } from 'react-icons/fa';
import { async } from '@firebase/util';

const Chat = ({ m , deleteMessage}) => {

    const [message, setMessage] = useState('');

    console.log("send message :",message);

    const createMessage = async (e) => {
        e.preventDefault(e);
        console.log("message:",message)
        await addDoc(collection(db, "Message"), {
          content: message,
          receiverEmail: m.senderEmail,
          senderEmail: m.receiverEmail
        });
        setMessage("");
    };    

    const [reply, setReply] = useState(false);
    function handleReply(e){
        e.preventDefault();
        if(reply){
            createMessage(e);
            setReply(false);

        } else {
            setReply(true);
        }
    };

    return (
      <div>
            <div>
                <h3>Message:</h3>
                <div>
                receiver:
                    {m.receiverEmail}
                </div>
                <div>
                sender:
                    {m.senderEmail}                    
                </div>
                <div>
                    {m.content}
                </div>
            </div>
            <div>
            {reply ? <textarea onChange={(e) => setMessage(e.target.value)}></textarea> : ""}
                
            </div>
            <button onClick={handleReply} className={style.symbol}>{reply ? "Send" : "Reply"}</button> 
            <button className={style.symbol} onClick={() => deleteMessage(m.id)}> <FaRegTrashAlt/></button>  
      </div>
    );
  };
  
  export default Chat;


  //