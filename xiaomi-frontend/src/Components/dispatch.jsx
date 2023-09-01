import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DispatchPlan = () => {
  const navigate = useNavigate();
  const [partsData, setPartsData] = useState([]);

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

  const handleDispatchClick = (part_id) => {
    // Handle the dispatch action for the specific part here
    console.log(`Dispatching part with ID ${part_id}`);
    navigate('/order_dispatched');
  };

  return (
    <div className="dispatch-plan-container">
      <h1>Part Requests</h1>
      <div className="table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Part ID</th>
              <th>Part Name</th>
              <th>Required Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partsData.map((part) => (
              <tr key={part.part_id}>
                <td>{part.part_id}</td>
                <td>{part.part_name}</td>
                <td>{part.Required_quantity}</td>
                <td>
                  <button
                    className="order-button"
                    onClick={() => handleDispatchClick(part.part_id)}
                  >
                    Dispatch
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DispatchPlan;
