// only for testing



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/userService.js";

const SimpleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const user = { firstName, lastName, emailId };
    // You can perform any necessary operations here, such as submitting the form data to a server
    console.log(user);
    // For demonstration purposes, let's just navigate back to the homepage
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Simple Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
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
                <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
              </div>
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-danger w-100" onClick={() => navigate('/')}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleForm;
