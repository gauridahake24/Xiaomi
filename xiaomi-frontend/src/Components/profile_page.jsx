// Profile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        if (id) {
            console.log('Fetching user profile...');
            axios.get(`http://localhost:8080/service/add`, {
                params: {
                    username: "gauri",
                    user_type: "warehouse" // Replace with the appropriate value
                }
            })
            .then(response => {
                // Handle successful response
                setUserProfile(response.data);
            })
            .catch(error => {
                // Handle error
                console.log("Error:", error);
            });
        }
    }, [id]);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>User Id: {userProfile.ID}</p>
            <p>Username: {userProfile.Name}</p>
    
        </div>
    );
};

export default Profile;
