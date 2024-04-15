import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import UserService from "../services/userService";

const ListUserComponent = ()=>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers=()=>{
        UserService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">User DB</h2>
            <div className="table-responsive">
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
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="text-center">{user.id}</td>
                                <td className="text-center">{user.firstName}</td>
                                <td className="text-center">{user.lastName}</td>
                                <td className="text-center">{user.emailId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListUserComponent;
