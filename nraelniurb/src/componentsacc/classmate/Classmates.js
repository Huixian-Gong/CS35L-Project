import React from 'react';

const Classmates = ({ u }) => {

  return (
    <div>
      {u.userEmail}
      {u.lecNumber}
      {u.userName}
    </div>
  );
};

export default Classmates;