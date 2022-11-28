import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../firebase';
import style from './TodoList.module.css'
import Block from '../ui/Block'
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

function TodoList({user}) {
    console.log("Todo email:", user.email)
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      email: user.email,
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'), where ("email","==",user.email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    
      <div>
        <h2>Todo List</h2>
          <Block>
            <form onSubmit={createTodo} className={style.form}>
                <div className={style.control}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className={style.textarea}
                        type='text'
                        placeholder='Add Todo'
                    />
                      <button className={style.actions}>
                        <AiOutlinePlus/>
                      </button>  
                </div>
            </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
        </Block>
      </div>
    
  );
}

export default TodoList;