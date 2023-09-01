import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockPartsData = [
  {
    part_id: 1,
    part_name: 'Widget A',
    Available_quantity: 10,
    Required_quantity: 5,
    priority: 'high',
  },
  {
    part_id: 2,
    part_name: 'Widget B',
    Available_quantity: 20,
    Required_quantity: 15,
    priority: 'high',
  },
  {
    part_id: 3,
    part_name: 'Widget C',
    Available_quantity: 15,
    Required_quantity: 10,
    priority: 'high',
  },
  // Add more mock data as needed
];

const SC_req = () => {
  const [partsData] = useState(mockPartsData); // Use mock data as initial state
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/create-order');
  };
  const handleStartClick1 = () => {
    navigate('/customer_orders');
  };

  return (
    <div className="sc-req-container">
      <h1>Available Quantity in Service Centre</h1>
      <div className="table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Part ID</th>
              <th>Part Name</th>
              <th>Available Quantity</th>
              <th>Required Quantity</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partsData.map((part) => (
              <tr key={part.part_id}>
                <td>{part.part_id}</td>
                <td>{part.part_name}</td>
                <td>{part.Available_quantity}</td>
                <td>{part.Required_quantity}</td>
                <td>{part.priority}</td>
                <td>
                  <button className="order-button" onClick={handleStartClick}>Order</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div >
      <div className = "center-button-1">
      <button onClick={handleStartClick1}>All Issues</button>
      </div>
    </div>
  );
};

export default SC_req;
