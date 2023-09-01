import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SC_req = () => {
  const [partsData, setPartsData] = useState([]); // Initialize state with an empty array
  const navigate = useNavigate();

  const handleStartClick = (part_id) => {
    navigate(`/create-order?part_id=${part_id}`);
  };
  
  const handleStartClick1 = () => {
    navigate('/customer_orders');
  };
const getData = async()=> {
  try{

    const response = await fetch('http://localhost:8080/service/print')
    const data = await response.json()
    console.log(data)
    setPartsData(data)
  }
  catch(error){
    console.log(error)
  }
}
  useEffect(() => {
    // Fetch data from your API endpoint when the component mounts
    // fetch('localhost:8080/service/print')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Update the state with the received data
    //     setPartsData(data);
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
    getData()
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
              <tr key={part?.part_id}>
                <td>{part?.part_id}</td>
                <td>{part?.part_name}</td>
                <td>{part?.available_quantity}</td>
                <td>{part?.required_quantity}</td>
                <td>{part?.priority}</td>
                <td>
                  <button className="order-button" onClick={()=>{handleStartClick(part.part_id)}}>
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
