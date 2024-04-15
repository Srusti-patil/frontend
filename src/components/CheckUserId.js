import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService";

const CheckUserId = () => {
  const navigate = useNavigate();
  const [userIdInput, setUserIdInput] = useState('');

  const checkUserId = (e) => {
    e.preventDefault();
    if (!userIdInput) {
      alert('Enter User ID');
      return;
    }

    UserService.getUserById(userIdInput)
      .then(() => {
        console.log("User is present");
        navigate(`/edit-user/${userIdInput}`);
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
          <h2 className="text-center m-4">Check User ID</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="userIdInput" className="form-label">Enter User ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your User ID"
                name="userIdInput"
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
              />
            </div>
            <br></br>
            <div className="mb-3">
              <button className="btn btn-outline-primary w-100" onClick={checkUserId}>Check</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckUserId;
