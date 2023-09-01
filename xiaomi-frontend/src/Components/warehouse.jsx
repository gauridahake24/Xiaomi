import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const mockPartsData = [
    {
        part_id: 1,
        part_name: 'Widget A',
        Available_quantity: 10,
    },
    {
        part_id: 2,
        part_name: 'Widget B',
        Available_quantity: 20,
    },
    {
        part_id: 3,
        part_name: 'Widget C',
        Available_quantity: 15,
    },
    // Add more mock data as needed
];

const Warehouse = () => {
    const navigate= useNavigate();
    const handleStartClick = () => {
        navigate('/dispatch');
      };
    const [partsData] = useState(mockPartsData); // Use mock data as initial state

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
            <button className='partrequest' onClick={handleStartClick}>Go to Part Requests</button>
        </div>
    );
};

export default Warehouse;
