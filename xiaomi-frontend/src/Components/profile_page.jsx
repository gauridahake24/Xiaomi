import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Profile = () => {
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        console.log('Fetching user profile...');
        axios.get(`/home/${userId}`, {
            params: {
                user_type: userId
            }
        })
        .then(response => {
            console.log('User profile data:', response.data);
            setUserProfile(response.data);
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
        });
    }, [userId]);
    

 

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
