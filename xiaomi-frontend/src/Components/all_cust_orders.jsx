import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const All_orders = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate('/SC_requirements');
  };
  const [ordersData, setOrdersData] = useState([]); // Initialize state with an empty array

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch('YOUR_API_ENDPOINT_URL_HERE')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setOrdersData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

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
        <button onClick={handleStartClick}>Go to Parts Data</button>
      </div>
    </div>
  );
};

export default All_orders;
