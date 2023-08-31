import React, { useState } from 'react';


const Form = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ username, userType });
    };

    return (
        <div className="form-container">
            <h2>Create Profile</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="user_type">User Type</label>
                    <select className="form-control" id="user_type" name="user_type" value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select User Type</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="service">Service Centre</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
