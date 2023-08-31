import React, { useState } from 'react';

const CreateUpdateRepairOrder = () => {
    const [customerName, setCustomerName] = useState('');
    const [deviceModel, setDeviceModel] = useState('');
    const [issueDescription, setIssueDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        

        console.log('Submitted Repair Order: ');
    };

    return (
        <div className='create_repair'>
            <h1>Tell us your Issue</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Customer Name:</label>
                    <input type="text" className='form-control' value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Device Model:</label>
                    <input type="text" className='form-control' value={deviceModel} onChange={(e) => setDeviceModel(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Issue Description:</label>
                    <textarea className='form-control' value={issueDescription} onChange={(e) => setIssueDescription(e.target.value)} />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default CreateUpdateRepairOrder;
