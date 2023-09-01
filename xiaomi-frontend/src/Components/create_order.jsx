import React, { useState, useEffect } from 'react';
import { useNavigate , useSearchParams, useLocation} from 'react-router-dom';

const RepairOrder = () => {
    const navigate = useNavigate();
    const [Available_quantity, setAvailableQuantity] = useState(0);
    const [part_name, setPartName] = useState('');
    const [Required_quantity, setRequiredQuantity] = useState('');
    const [warehouse_location, setWarehouseLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const partId = searchParams.get("part_id");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!Required_quantity  || !warehouse_location ) {
            console.error("Please fill in all required fields.");
            setErrorMessage('All fields are necessary! Please enter required data');
            return ;
        }
        
        fetch("http://localhost:8080/warehouse/add", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({part_id:partId, required_quantity: Required_quantity, source_warehouse: warehouse_location})
            
        }).then(() => {
            navigate(`/submit`);
            console.log("new order added")
        })
    };

    useEffect(() => {
        const fetchAvailableQuantity = async () => {
            try {
                const response = await fetch('http://localhost:8080/service/printId', {method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify({part_id:partId})});
                const data = await response.json();
                console.log(data)
                console.log(response)
                setAvailableQuantity(data.available_quantity);
            } catch (error) {
                console.error('Error fetching available quantity:', error);
            }
        };

        fetchAvailableQuantity();
    }, []);

    return (
        <div className="repair-order-container">
            <h1>Create Order</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form className="repair-order-form" onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Part id : {partId}</label>
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
