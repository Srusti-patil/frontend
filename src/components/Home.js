import React, { useState } from 'react';
import Op1 from './Op1.js';
import Op2 from './Op2.js';
import ListUserComponent from './ListUserComponent.js';
import DeleteUser from './DeleteUser.js';
import UpdateUser from './UpdateUser.js';
import CreateUser from './CreateUser.js';
import CheckUserId from './CheckUserId.js';
import UpdateUserWithCheck from './UpdateUserWithCheck.js';
import ViewUserById from './ViewUserById.js';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-option-container">
          <button className="sidebar-option" onClick={() => handleOptionClick('option1')}>
            Add user
          </button>
        </div>
        <div className="sidebar-option-container">
          <button className="sidebar-option" onClick={() => handleOptionClick('option2')}>
            Update user
          </button>
        </div>
        <div className="sidebar-option-container">
          <button className="sidebar-option" onClick={() => handleOptionClick('option3')}>
            View all users
          </button>
        </div>
        <div className="sidebar-option-container">
          <button className="sidebar-option" onClick={() => handleOptionClick('option4')}>
            View user by id
          </button>
        </div>
        <div className="sidebar-option-container">
          <button className="sidebar-option" onClick={() => handleOptionClick('option5')}>
            Delete user
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        {selectedOption === 'option1' && (
          <div className="dashboard-section">
            <CreateUser />
          </div>
        )}
        {selectedOption === 'option2' && (
          <div className="dashboard-section">
            {/* <CheckUserId /> */}
            <UpdateUser />
          </div>
        )}
        {selectedOption === 'option3' && (
          <div className="dashboard-section">
            <ListUserComponent />
          </div>
        )}
        {selectedOption === 'option4' && (
          <div className="dashboard-section">
            <ViewUserById />
          </div>
        )}
        {selectedOption === 'option5' && (
          <div className="dashboard-section">
            <DeleteUser />
          </div>
        )}

      </div>
    </div>
  );
};


export default Home;
