// Startpage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageCard from './HomePageCard';

const Startpage = () => {
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  const handleStartClick = () => {
    navigate('/make_profile');
  };

  const handleStartClick1 = () => {
    navigate2('/cust_home');
  };

  return (
    <div><h1 className="startpage-title">
    Welcome to Xiaomi Warehouse Management Portal
  </h1>
    <div className="startpage-container">

      
      <HomePageCard
        title="Service Centers & Warehouses"
        description="Manage your service centers and warehouses here."
        buttonText="Start"
        onClick={handleStartClick}
      />
      
      <HomePageCard
        title="Customers"
        description="Add an issue or manage customer inquiries."
        buttonText="Add Issue"
        onClick={handleStartClick1}
      />
    </div>
    </div>
  );
};

export default Startpage;
