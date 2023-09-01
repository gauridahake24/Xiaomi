import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RepairOrder = () => {
    const navigate = useNavigate();
    const [Available_quantity, setAvailableQuantity] = useState(0);
    const [part_name, setPartName] = useState('');
    const [Required_quantity, setRequiredQuantity] = useState('');
    const [warehouse_location, setWarehouseLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!Required_quantity || !part_name || !warehouse_location ) {
            console.error("Please fill in all required fields.");
            setErrorMessage('All fields are necessary! Please enter required data');
            return ;
        }
        
        const newOrder = { Available_quantity, part_name, Required_quantity, warehouse_location }
        const formData = new FormData();
        formData.append("Available_quantity", Required_quantity)
        formData.append("part_name", "screen")
        console.log(newOrder)
        fetch("http://localhost:8080/service/add", {
            method: "POST",
            // headers:{"Content-Type": "application/json"},
            body: formData

        }).then(() => {
            navigate(`/submit`);
            console.log("new order added")
        })
    };

    useEffect(() => {
        const fetchAvailableQuantity = async () => {
            try {
                const response = await fetch('localhost:8080/service/add');
                const data = await response.json();
                setAvailableQuantity(data.available_quantity);
            } catch (error) {
                console.error('Error fetching available quantity:', error);
            }
        };

        fetchAvailableQuantity();
    }, []);

    return (
        <div className="repair-order-container">
            <h2>Create Order</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="repair-order-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="part_name">Part Name:</label>
                    <input type="text" id="part_name" value={part_name} onChange={(e) => setPartName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Available Quantity: {Available_quantity}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="Required_quantity">Required Quantity:</label>
                    <input type="number" id="Required_quantity" value={Required_quantity} onChange={(e) => setRequiredQuantity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="warehouse_location">Warehouse Location:</label>
                    <input type="text" id="warehouse_location" value={warehouse_location} onChange={(e) => setWarehouseLocation(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RepairOrder;
