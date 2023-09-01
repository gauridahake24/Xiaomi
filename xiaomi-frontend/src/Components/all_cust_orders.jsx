import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockPartsData = [
  {
    order_id: 1,
    customer_name: 'Widget A',
    device_model: 10,
    issue_description: 'ABC',
  },
  {
    order_id: 2,
    customer_name: 'Widget B',
    device_model: 60,
    issue_description: 'DEF',
  },
  {
    order_id: 3,
    customer_name: 'Widget C',
    device_model: 30,
    issue_description: 'GHI',
  },
  // Add more mock data as needed
];

const All_orders = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/SC_requirements');
  };
  const [ordersData] = useState(mockPartsData); // Use mock data as initial state

  return (
    <div className="all-orders-container">
      <h1>All Customer Orders</h1>
      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Device Model</th>
              <th>Issue Description</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={order.order_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{order.order_id}</td>
                <td>{order.customer_name}</td>
                <td>{order.device_model}</td>
                <td>{order.issue_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="center-button-1">
        <button onClick={handleStartClick}>
          Go to Parts Data
        </button>
      </div>
    </div>
  );
};

export default All_orders;
