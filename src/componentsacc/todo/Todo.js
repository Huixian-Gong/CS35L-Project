import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import style from './Todo.module.css'

const Todo = ({ todo, deleteTodo }) => {
  return (
    <li>
      <div>
        <p>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<div className={style.symbol}><FaRegTrashAlt /></div>}</button>
    </li>
  );
};

export default Todo;