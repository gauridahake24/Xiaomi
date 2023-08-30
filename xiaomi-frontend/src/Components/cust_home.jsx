import React, { useState } from 'react';

const CreateUpdateRepairOrder = () => {
    const [customerName, setCustomerName] = useState('');
    const [deviceModel, setDeviceModel] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulating form submission with mock data
        const mockRepairOrder = {
            customerName,
            deviceModel,
            issueDescription,
            status: 'Pending', // Default status
        };

        console.log('Submitted Repair Order:', mockRepairOrder);
    };

    return (
        <div className='create_repair'>
            <h1>Tell us your Issue</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer Name:</label>
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
                <div>
                    <label>Device Model:</label>
                    <input type="text" value={deviceModel} onChange={(e) => setDeviceModel(e.target.value)} />
                </div>
                <div>
                    <label>Issue Description:</label>
                    <textarea value={issueDescription} onChange={(e) => setIssueDescription(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateUpdateRepairOrder;
