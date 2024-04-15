import React, { useState } from 'react';
import CheckUserId from './CheckUserId';
import UpdateUser from './UpdateUser';

const UpdateUserWithCheck = () => {
  const [userId, setUserId] = useState(null);

  const handleUserIdCheck = (userId) => {
    setUserId(userId);
  };

  return (
    <div className="update-user-container">
      {!userId ? (
        <CheckUserId onUserIdCheck={handleUserIdCheck} />
      ) : (
        <UpdateUser userId={userId} />
      )}
    </div>
  );
};

export default UpdateUserWithCheck;
