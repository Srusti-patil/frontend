import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../services/userService";

const CreateUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [showForm, setShowForm] = useState(true); // State variable to control form visibility
  const navigate = useNavigate();

  function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

  const createUser = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate the form
    if (!firstName || !lastName || !emailId) {
      alert('Please fill in all the fields.');
      return; // Stop execution if validation fails
    }

    // To check whether the email is in right format
    if (!isValidEmail(emailId)) {
      alert('Please enter a valid email address.');
      return; // Stop execution if email is not valid
  }
  

    // All fields are filled, proceed with user creation
    const user = { firstName, lastName, emailId };
    try 
    {

      const res =await UserService.createUser(user);

      if(res.status===200)
      {
      
        alert('User created successfully!');
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmailId('');
      // Show the form again
      setShowForm(true);
      navigate('/');

     }

     else
     {
      console.error('Unexpected response status:', res.status);
      alert('An error occurred while creating the user.');
     }

    }

    catch (error) 
    {
      if ( error.response.status === 409) 
      {
        alert('This user already exists');
      }

      else
      {
      console.error('Error creating user:', error);
      alert('An error occurred while creating the user.');
      }

   } 
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add User</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">E-mail</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-6">
                <button className="btn btn-outline-primary w-100" onClick={createUser}>Submit</button>
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
}

export default CreateUser;
