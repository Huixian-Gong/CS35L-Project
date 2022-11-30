import React ,{ useState } from 'react';
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


const Account = (user) => {
  const [users,setUsers] = useState([]);
  const [email,setEmail] = useState('');
  // setEmail(user.user.email);
  console.log(user);
 
  if(user != ""){
    const q1 = collection(db,toString(user));
    const getUsers = async () => {
      const data = await getDocs(q1);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getUsers();
    console.log(users);
  }

  return <div> your course <button>onSubmit</button> </div>
};

export default Account;
