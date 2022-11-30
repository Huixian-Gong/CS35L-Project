import React, { useState, useEffect } from 'react';
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

const Classmates = ({ email, classname }) => {
  console.log(classname)
  const [info, setInfo] = useState([]);


  // const q = collection(collection(db, "CS35L"))

  // useEffect(() => {
  //   const getUser = async () => {
  //     const data = await getDocs(q);
  //     setInfo(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  //     console.log(info);
  //   };
  //   getUser();

  // }, []);
  

    // getDocs(q)
    // .then((snapShot) => {
    //   let classmatesInfo = []
    //   snapShot.docs.forEach((doc) => {
    //     classmatesInfo.push({ ...doc.data(), id : doc.id})
    //   })
    //   setInfo(classmatesInfo)
    //   console.log(classmatesInfo)
    // })

  return (
    <div>
      fuck you!
    </div>
  );
};

export default Classmates;