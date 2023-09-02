import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const CreateUpdateRepairOrder = () => {
    const [customer_name, setCustomerName] = useState('');
    const [device_model, setDeviceModel] = useState('');
    const [issue_description, setIssueDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!customer_name || !device_model || !issue_description) {
            console.error("Please fill in all required fields.");
            setErrorMessage('All fields are necessary! Please enter required data');
            return;
        }
        
        const student = { customer_name, device_model, issue_description };
        
        
        try {
            const response = await fetch("http://localhost:8080/custorder/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            });
            console.log(response)
            
            if (response.ok) {
                console.log('Repair Order Submitted Successfully');
               
                setCustomerName('');
                setDeviceModel('');
                setIssueDescription('');
                navigate("/submit-page-cust")
            } else {
                console.error('Failed to submit Repair Order');
                setErrorMessage('Failed to submit Repair Order. Please try again later.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setErrorMessage('An error occurred while submitting the Repair Order.');
        }
    };

    return (
        <div className='create_repair'>
            <h1>Tell us your Issue</h1>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Customer Name:</label>
                    <input type="text" className='form-control' value={customer_name} onChange={(e) => setCustomerName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Device Model:</label>
                    <input type="text" className='form-control' value={device_model} onChange={(e) => setDeviceModel(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Issue Description:</label>
                    <textarea className='form-control' value={issue_description} onChange={(e) => setIssueDescription(e.target.value)} />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default CreateUpdateRepairOrder;
