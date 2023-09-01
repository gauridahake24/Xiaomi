import React from 'react';
import { useNavigate } from 'react-router-dom';


const Startpage = () => {
    const navigate = useNavigate();
    
    const handleStartClick = () => {
        navigate('/make_profile'); 
    };
    
    return (
        <div className="startpage-container">
            <h1 className="startpage-title">Welcome to Xiaomi Warehouse Management Portal</h1>
            <button className="startpage-button" onClick={handleStartClick}>Start</button>
        </div>
    );
};

export default Startpage;
