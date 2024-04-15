import React, { useState } from "react";

import UserService from "../services/userService";

export default function DeleteUser() {
    const [userIdInput, setUserIdInput] = useState('');

    const checkUserId = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if(!userIdInput){
            alert('Enter the User ID');
            return;
        }
        UserService.getUserById(userIdInput)
        .then(()=>{
            console.log("User is present");
            deleteUser(userIdInput);
            alert('The entry with User ID : ' + userIdInput + ' is deleted');
        })
        .catch(error =>{
            alert('User not found');
            console.log(error);
        })
    };
    
    const deleteUser = (userId) => {
        UserService.deleteUser(userId).then((response) =>{
            // getAllUsers();
            console.log(response.status);
        }).catch(error =>{
            console.log(error);
        })
         
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Delete User</h2>
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
              <div className="mb-3 text-center">
                <button className="btn btn-outline-danger w-100" onClick={checkUserId}>Delete</button>  
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}



