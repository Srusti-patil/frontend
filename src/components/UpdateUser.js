import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/userService.js";

const UpdateUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [userIdInput, setUserIdInput] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  const updateUser = () => {
    // e.preventDefault(); // Prevent the default form submission behavior
    const user = { firstName, lastName, emailId };
    UserService.updateUser(userIdInput, user)
      .then(() => {
        console.log("User updated successfully");
        alert("User updated successfully");
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const checkUserId = (e) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!userIdInput) {
      alert('Enter User ID');
      return;
    }
  
    UserService.getUserById(userIdInput)
      .then(() => {
        console.log("User is present 101");
        updateUser(); // Call updateUser function here if user exists
      })
      .catch(error => {
        console.log(error);
        alert('User not found');
      });
  };
  
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update User</h2>
          <form>
            {/* Add the CheckUserId component */}
            <div className="mb-3">
              <label htmlFor="userIdInput" className="form-label">User ID</label>
              <input
               id="userIdInput"
                type="text"
                className="form-control"
                placeholder="Enter your User ID"
                name="userIdInput"
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
              />
              {/* <button className="btn btn-outline-primary mt-2" onClick={checkUserId}>Check</button> */}
            </div>

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
              id="firstName"
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailId" className="form-label">E-mail</label>
              <input
                id="emailId"
                type="email"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-outline-primary w-100" onClick={checkUserId}>Submit</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-danger w-100" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
