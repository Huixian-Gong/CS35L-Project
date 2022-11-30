import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../firebase';
// import style from './TodoList.module.css'
import style from "../components/SigninForm.module.css"
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

function AddCourse ({user}) {
    const [Course, setCourse] = useState([]);
    const [inputCN, setInputCN] = useState('');
    const [inputUN, setInputUN] = useState('');
    const [inputLN, setInputLN] = useState('');

    const createCourse = async (e) => {
        e.preventDefault(e);
        if (inputCN === '') {
          alert('Course Name cannot be empty');
          return;
        }
        if (inputLN === '') {
            alert('Lec Name cannot be empty');
            return;
        }
        if (inputUN === '') {
            alert('Name cannot be empty');
            return;
        }  
        await addDoc(collection(db, inputCN), {
          courseName: inputCN,
          lecNumber: inputLN,
          userName: inputUN,
          userEmail: user.email
        });
        setInputCN('');
        setInputLN('');
        setInputUN('');
      };
    return (
    <div>
        <div>Add Course</div>
        <Block>
            <form onSubmit={createCourse}>
                <div className={style.inner}>
                    <div className={style.group}>
                        <label></label>
                        <input 
                            placeholder='Course Name'
                            value={inputCN}
                            onChange={(e) => setInputCN(e.target.value)}>
                        </input>
                    </div>
                    <div className={style.group}>
                        <label></label>
                        <input placeholder='Lecture Number' 
                            value={inputLN}
                            onChange={(e) => setInputLN(e.target.value)}/>
                    </div>
                    <div className={style.group}>
                        <label></label>
                        <input 
                            placeholder='Your Preferred Name'
                            value={inputUN}
                            onChange={(e) => setInputUN(e.target.value)}/>
                    </div>
                    <button type="add_course"> Submit </button>
                </div>
            </form>
        </Block>
    </div>
    );
}

export default AddCourse;