import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        // Fetch user profile data using the "userId" from the URL parameter
        // and set it to the "userProfile" state
    }, [userId]);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {userProfile.username}</p>
            <p>User Type: {userProfile.userType}</p>
            
        </div>
    );
};

export default Profile;
