import React, { useState } from "react";
import UserService from "../services/userService.js";

const ViewUserById = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');

    const getUserById = () => {
        if (!userId) {
            alert('Please enter a User ID');
            return;
        }

        UserService.getUserById(userId)
            .then((response) => {
                setUser(response.data);
                setError('');
            })
            .catch((error) => {
                setUser(null);
                alert('User not found');
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">View User By ID</h2>
            <br></br>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="mb-3">
                        <label htmlFor="userIdInput" className="form-label">Enter User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userIdInput"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-outline-primary w-100"  onClick={getUserById}>Enter</button>
                    {error && <p className="text-danger">{error}</p>}
                    {user && (
                        
                        <div className="table-responsive" style={{ marginTop: '40px' }}>
                            <table className="table table-bordered table-striped wide-table">
                            <thead>
                                <tr>
                                    <th className="text-center">Id</th>
                                    <th className="text-center">First Name</th>
                                    <th className="text-center">Last Name</th>
                                    <th className="text-center">Email Id</th>
                                    {/* <th className="text-center"> Actions </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* {users.map(user => ( */}
                                    <tr key={user.id}>
                                        <td className="text-center">{user.id}</td>
                                        <td className="text-center">{user.firstName}</td>
                                        <td className="text-center">{user.lastName}</td>
                                        <td className="text-center">{user.emailId}</td>
                                    </tr>
                                {/* ))} */}
                            </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewUserById;
