import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const Welcome = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");
    const navigate = useNavigate();

    return (
        <div className="welcome-card">
            <h1>Welcome to GP Distributors</h1>
            <h2>Your user ID is: {userId}</h2>
            <p>Please log in to continue.</p>

            <div className="button-container">
                <button className="btn btn-primary" onClick={() => { navigate("/login") }}>Log in</button>
            </div>
        </div>
    );
};

export default Welcome;
