import React, { useState } from 'react';
import axios from 'axios';

const MakeProfile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object to hold the user profile data
        const userData = {
            username,
            password,
            user_type: userType,
        };

        // Send the user profile data to the server using Axios POST request
        axios.post('/api/users', userData) // Replace with the actual API endpoint
            .then(response => {
                console.log('User profile created:', response.data);
            })
            .catch(error => {
                console.error('Error creating user profile:', error);
            });
    };

    return (
        <div>
            <h1>Create User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>User Type:</label>
                    <input type="text" value={userType} onChange={(e) => setUserType(e.target.value)} />
                </div>
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
};

export default MakeProfile;
