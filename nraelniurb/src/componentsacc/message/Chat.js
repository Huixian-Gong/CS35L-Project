import React, {useState} from 'react';
import style from './Chat.module.css'

const Chat = ({ m }) => {
    const [reply, setReply] = useState(false);
    function handleReply(e){
        e.preventDefault();
        if(reply){
            setReply(false);
        } else {
            setReply(true);
        }
    }


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
            {reply ? <textarea></textarea> : ""}
                
            </div>
            <button onClick={handleReply} className={style.symbol}>{reply ? "Send" : "Reply"}</button>   
      </div>
    );
  };
  
  export default Chat;


  //