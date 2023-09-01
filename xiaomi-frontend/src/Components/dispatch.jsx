import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mockPartsData = [
  {
    part_id: 1,
    part_name: 'Widget A',
    Required_quantity: 5,
  },
  {
    part_id: 2,
    part_name: 'Widget B',
    Required_quantity: 15,
  },
  {
    part_id: 3,
    part_name: 'Widget C',
    Required_quantity: 10,
  },
  // Add more mock data as needed
];

const DispatchPlan = () => {
  const [partsData] = useState(mockPartsData); // Use mock data as initial state
  const navigate = useNavigate();
  const handleDispatchClick = (part_id) => {
    // Handle the dispatch action for the specific part here
    // You can implement your logic and API calls here
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

