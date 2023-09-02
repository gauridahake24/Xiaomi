import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DispatchPlan = () => {
  const navigate = useNavigate();
  const [partsData, setPartsData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint when the component mounts
    fetch("http://localhost:8080/warehouse/print")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the state with the received data
        setPartsData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

  const handleDispatchClick = async (part) => {
    const response = await fetch("http://localhost:8080/warehouse/dispatch", {method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify({...part})})
    // Handle the dispatch action for the specific part here
    console.log(`Dispatching part with ID ${part.part_id}`);
    navigate("/order_dispatched");
  };

  return (
    <div className="dispatch-plan-container">
      <h1>Part Requests</h1>
      <div className="table-container">
        <table className="parts-table">
          <thead>
            <tr>
              <th>Part ID</th>
              <th>Required Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {partsData?.map((part, index) => {
              if (part.dispatch_id > 5) {
                return (
                  <tr
                    key={part.part_id}
                    className={index % 2 === 0 ? "even-row" : "odd-row"}
                  >
                    <td>{part.part_id}</td>
                    <td>{part.required_quantity}</td>
                    <td>
                      <button
                        className="order-button"
                        onClick={() => handleDispatchClick(part)}
                      >
                        Dispatch
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
            {/* {partsData.map((part) => (
              <tr key={part.part_id}>
                <td>{part.part_id}</td>
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
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DispatchPlan;
