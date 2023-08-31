import React, { useState, useEffect } from 'react';

const RepairOrder = () => {
    const [Available_quantity, setAvailableQuantity] = useState(0);
    const [part_name, setPartName] = useState('');
    const [Required_quantity, setRequiredQuantity] = useState('');
    const [warehouse_location, setWarehouseLocation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newOrder = {Available_quantity,part_name,Required_quantity, warehouse_location }
        const formData = new FormData();
        formData.append("Available_quantity", Required_quantity)
        formData.append("part_name", "screen")
        console.log(newOrder)
        fetch("http://localhost:8080/service/add",{
            method:"POST",
            // headers:{"Content-Type": "application/json"},
            body:formData

        }).then(()=>{
            console.log("new order added")
        } )
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
            <form className="repair-order-form" onSubmit={handleSubmit}>
                <label>
                    Part Name:
                    <input type="text" value={part_name} onChange={(e) => setPartName(e.target.value)} />
                </label>
                <label>
                    Available Quantity: {Available_quantity}
                </label>
                <label>
                    Required Quantity:
                    <input type="number" value={Required_quantity} onChange={(e) => setRequiredQuantity(e.target.value)} />
                </label>
                <label>
                    Warehouse Location:
                    <input type="text" value={warehouse_location} onChange={(e) => setWarehouseLocation(e.target.value)} />
                </label>
            
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RepairOrder;
