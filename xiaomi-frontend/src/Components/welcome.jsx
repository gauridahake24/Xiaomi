// src/components/Welcome.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");

    return (
        <div>
            <h1>Welcome to Xiaomi Warehouse Management System</h1>
            <h1>Your user ID is: {userId}</h1>
            <h1> please Login in here</h1>

            <div className="form-group-1" style={{ display: 'flex', justifyContent: 'center' }}>
    <button type="submit" className="btn btn-primary">Log in</button>
</div>
    
        </div>
        
    );
};

export default Welcome;
