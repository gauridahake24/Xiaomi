import React, { useState, useEffect } from 'react';


const RepairOrder = () => {
    const [availableQuantity, setAvailableQuantity] = useState(0);
    const [partName, setPartName] = useState('');
    const [requiredQuantity, setRequiredQuantity] = useState('');
    const [warehouseLocation, setWarehouseLocation] = useState('');
  

    // Simulate fetching available quantity from the backend
    useEffect(() => {
        // Replace this with your actual API call to get available quantity
        // For now, we're using a dummy value
        const fetchAvailableQuantity = async () => {
            try {
                const response = await fetch('backend_api_url_here');
                const data = await response.json();
                setAvailableQuantity(data.available_quantity);
            } catch (error) {
                console.error('Error fetching available quantity:', error);
            }
        };

        fetchAvailableQuantity();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle submitting the repair order form
        // This is where you would send the data to the backend
    };

    return (
        <div className="repair-order-container">
            <h2>Create  Order</h2>
            <form className="repair-order-form" onSubmit={handleSubmit}>
                <label>
                    Part Name:
                    <input type="text" value={partName} onChange={(e) => setPartName(e.target.value)} />
                </label>
                <label>
                    Available Quantity: {availableQuantity}
                </label>
                <label>
                    Required Quantity:
                    <input type="number" value={requiredQuantity} onChange={(e) => setRequiredQuantity(e.target.value)} />
                </label>
                <label>
                    Warehouse Location:
                    <input type="text" value={warehouseLocation} onChange={(e) => setWarehouseLocation(e.target.value)} />
                </label>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RepairOrder;
