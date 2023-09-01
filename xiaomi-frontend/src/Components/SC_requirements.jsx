import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SC_req = () => {
  const [partsData, setPartsData] = useState([]); // Initialize state with an empty array
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/create-order');
  };
  
  const handleStartClick1 = () => {
    navigate('/customer_orders');
  };

  useEffect(() => {
    // Fetch data from your API endpoint when the component mounts
    fetch('YOUR_API_ENDPOINT_URL_HERE')
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the received data
        setPartsData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

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
                  <button className="order-button" onClick={handleStartClick}>
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="center-button-1">
        <button onClick={handleStartClick1}>All Issues</button>
      </div>
    </div>
  );
};

export default SC_req;
