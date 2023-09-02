import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Warehouse = () => {
  const [partsData, setPartsData] = useState([]); 
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/dispatch");
  };

  useEffect(() => {
    
    fetch("http://localhost:8080/warehouse/print")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPartsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div className="warehouse-container">
      <h1>Available Quantity in Warehouse</h1>
      <div className="table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Part ID</th>

              <th>Warehouse Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {partsData?.map((part, index) => {
              if (part.dispatch_id > -6 && part.dispatch_id < 0) {
                return (
                  <tr
                    key={part.part_id}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{part.part_id}</td>
                    <td>{part.warehouse_quantity}</td>
                  </tr>
                );
              }
            })}
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
