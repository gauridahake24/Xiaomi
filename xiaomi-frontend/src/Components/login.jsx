import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async(event) => {
        event.preventDefault();
        const response = await fetch ("http://localhost:8080/users/printId",{  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id: username})})
        const data = await response.json()
        console.log(data)

        if (response.status === 200) {
            localStorage.setItem("user_id", data.user_id)
            if (data.user_type === "warehouse"){
                navigate("/warehouse")
            }
            else{
                navigate("/sc_requirements")
            }
        }



        // For demonstration purposes, assuming hardcoded valid user data
        const validUsers = [
            { username: 'user123', password: 'password123' },
            { username: 'admin', password: 'admin123' }
            // Add more valid users as needed
        ];

        const user = validUsers.find(user => user.username === username && user.password === password);

        if (user) {
            // Successful login, navigate to welcome page
            navigate('/SC_requirements', { state: { userId: user.username } });
        } else {
            // Incorrect login, show an error message
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Userid</label>
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
