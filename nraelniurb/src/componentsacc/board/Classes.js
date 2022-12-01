import React from 'react';
import Block from '../../ui/Block';


const Classes = ({ c }) => {
    
    return (
      <div>
        <Block> 
            <div>
                <h3>Course:</h3>
                {c.courseName}
            </div>
        </Block>
        
      </div>
    );
  };
  
  export default Classes;


//{c.lecNumber}