import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import style from './Todo.module.css'
import Block from '../../ui/Block'

const Todo = ({ todo, deleteTodo }) => {
  return (
      <div>
      <hr className={style.line}></hr>
      <div className={style.deleteControl}>
        <div className={style.todoText}>
          {todo.text}
        </div>
        <div className={style.deleteBlock}>
      <button onClick={() => deleteTodo(todo.id)}>{<div className={style.symbol}><FaRegTrashAlt /></div>}</button>
      </div>
      </div>
      </div>
  );
};

export default Todo;