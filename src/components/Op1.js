// only for testing



import React from "react";

const Op1 =()=>{

    return(
        <div className="op1-container">
            <div className="op1-content">
                <h2 className="text-center">Register User</h2>
                <form action="http://localhost:8080/user" method="POST">
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your e-mail address"
                            name="email"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <a href="/" className="btn btn-outline-danger mx-2">Cancel</a>
                </form>
            </div>
        </div>
    );
}
export default Op1;
