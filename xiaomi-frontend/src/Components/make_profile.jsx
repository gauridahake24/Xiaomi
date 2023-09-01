import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user_type, setUserType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!username || !password || !user_type) {
            console.error("Please fill in all required fields.");
            setErrorMessage('All fields are necessary! Please enter required data');
            return ;
        }
        const student = { username, user_type, password };
        console.log(student);
        
        try {
            const response = await fetch("http://localhost:8080/users/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            });
            // const data2 = await response.json();
            console.log(response)
            
            if (response.ok) {
                console.log("success")
                const data = await response.json();
                navigate(`/welcome?userId=${data.user_id}`);
            } else {
                console.error("Failed to add new User");
            }
        } catch (error) {
            console.error("adding new User:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Create Profile</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="user_type">User Type</label>
                    <select
                        className="form-control"
                        id="user_type"
                        name="user_type"
                        value={user_type}
                        onChange={(e) => setUserType(e.target.value)}
                    >
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
