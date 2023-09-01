import React from 'react';
import { useNavigate } from 'react-router-dom';

const Submit = () => {
    const Navigate = useNavigate();
    const handleStartClick = () =>{
        Navigate("/SC_requirements")
    };
    
    return (
        <div>
            <h1>Your order has been successfully submitted to warehouse</h1>
            <button btn-btn-primary onClick={handleStartClick}>Dashboard</button>
            
        </div>
    );
};

export default Submit;
