import React from 'react';
import { useNavigate } from 'react-router-dom';


const DispatchOrder = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/warehouse');
  };

  return (
    <div className="dispatch-order-container">
      <div className="dispatch-order-card">
        <h1>Order Successfully Dispatched</h1>
        <h2>Go to Dashboard</h2>
        <button onClick={handleStartClick}>Dashboard</button>
      </div>
    </div>
  );
};

export default DispatchOrder;
