import React from 'react';
import Block from '../../ui/Block1';
import style from '../../ui/Block1.module.css';


const Classes = ({ c, deleteClass}) => {
    
    return (
      <div>
        <Block> 
            <div className={style.n} >
                Course Name: &nbsp;
                  <div className={style.c}>  {c.courseName} </div>
            </div>
            <button onClick={(e) => deleteClass(c.id)}>Delete</button>
        </Block>
        <div>&nbsp;</div>
      </div>
    );

  };
  
  export default Classes;


//{c.lecNumber}