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
import Block from '../../ui/Block';

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
                {/* <h2>Your Messages:</h2> */}
                <Block>
                &nbsp;
                <div className={style.label}>
                Sender:
                </div>
                <div className={style.msg}> 
                    {m.senderEmail}       
                </div>     

                &nbsp;

                <div className={style.label}>
                Message:
                </div>   
                <div className={style.msg}> 
                    {m.content}               
                </div>
                
                {/* &nbsp; */}
                <div>
                {reply ? <textarea className={style.textarea} placeholder={"Your reply message ... "} onChange={(e) => setMessage(e.target.value)}></textarea> : ""}   
                </div>
                    <button 
                        className={style.bbutton}
                        type='submit'
                        onClick={handleReply}>
                        {reply ? "Send" : "Reply"}
                    </button> 
                    <button  
                        type='submit'
                        className={style.dlbutton} 
                        onClick={() => deleteMessage(m.id)}> 
                        <FaRegTrashAlt/>
                    </button>  
                <div>&nbsp;</div>
            </Block>

            <div>&nbsp;</div>
            <div>&nbsp;</div>
            </div>
      </div>
    );
  };
  
  export default Chat;


  //