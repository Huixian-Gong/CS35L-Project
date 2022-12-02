import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { db } from '../firebase';
import style from "./AddCourse.module.css"
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
import Block from '../ui/Block'



function AddCourse (user) {
    console.log(user.user);
    const [Course, setCourse] = useState([]);
    const [inputCN, setInputCN] = useState('');
    const [inputUN, setInputUN] = useState('');
    const [inputLN, setInputLN] = useState('');
    const [notification, setNotification] = useState(false);
    function handleInputCN (e) {
        e.preventDefault();
        if (e.target.value !=''){
            setNotification(false);
        }
        setInputCN(e.target.value);
    }
    function handleInputLN (e) {
        e.preventDefault();
        if (e.target.value !=''){
            setNotification(false);
        }
        setInputLN(e.target.value);
    }
    function handleInputUN (e) {
        e.preventDefault();
        if (e.target.value !=''){
            setNotification(false);
        }
        setInputUN(e.target.value);
    }
    const createCourse = async (e) => {
        e.preventDefault(e);
        if (inputCN === '') {
            alert('Course Name cannot be empty');
            return;
        }
        if (inputLN === '') {
            alert('Lecture number cannot be empty');
            return;
        }
        if (inputUN === '') {
            alert('Your name cannot be empty');
            return;
        }
        await addDoc(collection(db, inputCN), {
          courseName: inputCN,
          lecNumber: inputLN,
          userName: inputUN,
          userEmail: user.user
        });
        await addDoc(collection(db, "Course"), {
            courseName: inputCN,
            lecNumber: inputLN,
            userName: inputUN,
            userEmail: user.user
        });
        await addDoc(collection(db, user.user), {
            courseName: inputCN,
            lecNumber: inputLN,
            userName: inputUN,
            userEmail: user.user
        });
        setInputCN('');
        setInputLN('');
        setInputUN('');
        setNotification(true);
      };
    return (
    <div>
    <div className={style.h2}>Add a Course</div>
        <Block>
            {notification ?  (<div className={style.error}>
                <div>&nbsp;</div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                { "Course Added Successfully!"}</div>) : ""}
            <form onSubmit={createCourse}>
                <div className={style.inner}>
                    <div >
                        <label> &nbsp; Course Name: &nbsp;</label>
                        <div>
                        <input 
                            className={style.input}
                            placeholder='Example: CS 35L'
                            value={inputCN}
                            onChange={handleInputCN}>
                        </input>
                        <div>&nbsp;</div>
                        </div>
                    </div>
                    <div >
                        <label>&nbsp;Lecture Number: &nbsp;</label>
                        <div>
                        <input
                            className={style.input} 
                            placeholder='Example: 1C' 
                            value={inputLN}
                            onChange={handleInputLN}/>
                            <div>&nbsp;</div>
                            </div>
                    </div>
                    <div >
                        <label>&nbsp;Your Preferred Name: &nbsp;</label>
                        <div>
                        <input
                            className={style.input}
                            placeholder='Example: Joe Bruin'
                            value={inputUN}
                            onChange={handleInputUN}/>
                            </div>
                    </div>
                    <div> &nbsp;</div>
                    <button type="submit"> Submit </button>
                </div>
            </form>
        </Block>
    </div>
    );
}

export default AddCourse;