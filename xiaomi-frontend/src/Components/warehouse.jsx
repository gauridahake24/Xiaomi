import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Warehouse = () => {
  const [partsData, setPartsData] = useState([]); // Initialize state with an empty array
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/dispatch');
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
    <div className="warehouse-container">
      <h1>Available Quantity in Warehouse</h1>
      <div className="table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Part ID</th>
              <th>Part Name</th>
              <th>Warehouse Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {partsData.map((part, index) => (
              <tr key={part.part_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{part.part_id}</td>
                <td>{part.part_name}</td>
                <td>{part.Available_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="partrequest" onClick={handleStartClick}>
        Go to Part Requests
      </button>
    </div>
  );
};

export default Warehouse;
