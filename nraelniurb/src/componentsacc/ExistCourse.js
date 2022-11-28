import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import style from './Todo.module.css'

const ExistCourse = ({ todo, deleteTodo }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <p>
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
};

export default ExistCourse;