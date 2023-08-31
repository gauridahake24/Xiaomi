import React, { useState } from 'react';


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

const SC_req = () => {
    const [partsData] = useState(mockPartsData); // Use mock data as initial state

    return (
        <div className="sc-req-container">
            <h1>Available Quantity in service Centre</h1>
            <table className="parts-table">
                <thead>
                    <tr>
                        <th>Part ID</th>
                        <th>Part Name</th>
                        <th>Available Quantity</th>
                        <th>Required Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {partsData.map((part) => (
                        <tr key={part.part_id}>
                            <td>{part.part_id}</td>
                            <td>{part.part_name}</td>
                            <td>{part.Available_quantity}</td>
                            <td>{part.Required_quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SC_req;
