import React from 'react';
import { useNavigate } from 'react-router-dom';


const Submit1 = () => {
    const Navigate = useNavigate();

    const handleStartClick = () => {
        Navigate("/");
    };

    return (
        <div className="submit-container">
            <h1>Your order has been successfully submitted</h1>
            <button className="btn btn-primary" onClick={handleStartClick}>Dashboard</button>
        </div>
    );
};

export default Submit1;
