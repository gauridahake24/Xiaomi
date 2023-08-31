// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUserType] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const student = { username, user_type, password };
        console.log(student);
        
        try {
            const response = await fetch("http://localhost:8080/service/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            });
            const data2 = await response.json();
            console.log(data2)
            
            if (response.ok) {
                const data = await response.json();
                navigate(`/welcome?userId=${data.userId}`);
            } else {
                console.error("Failed to add new student");
            }
        } catch (error) {
            console.error("adding new student:", error);
        }
    };



    return (
        <div className="form-container">
            <h2>Create Profile</h2>

            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="user_type">User Type</label>
                    <label htmlFor="usertype">Usertype</label>
                    <input type="text" className="form-control" id="user_type" name="user_type" placeholder="Enter username" value={user_type} onChange={(e) => setUserType(e.target.value)} />
                    {/* <select className="form-control" id="user_type" name="user_type" value={user_type} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select User Type</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="service">Service Centre</option>
                    </select> */}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
