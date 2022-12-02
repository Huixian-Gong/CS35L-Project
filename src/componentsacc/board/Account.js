import React ,{ useState } from 'react';
import Classes from './Classes';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
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
import style from '../../ui/Block1.module.css'


function Account(user){
  const [users,setUsers] = useState([]);
  const [email,setEmail] = useState(user.user);
  // setEmail(user.user.email);
  console.log(user.user);

  if(email != ''){
    console.log("account email :",email);
    const q1 = collection(db,user.user);
    const getUsers = async () => {
      const data = await getDocs(q1);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getUsers();
    setEmail('');
  }

  console.log(users);

  const deleteClass = async (id) => {
    await deleteDoc(doc(db, user.user, id));
    setEmail(user.user)
  };

  return (

    <div >
      <div>&nbsp;</div>
      <label className={style.h2}> Your Study List </label>
      <div>&nbsp;</div>
      {users.map((c, index) => (
              <Classes
                key={index}
                c={c}
                deleteClass={deleteClass}
              />
            ))}
    </div>
    
  );
};

export default Account;
