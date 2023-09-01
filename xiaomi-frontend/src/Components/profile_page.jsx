import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);

    const getdata = async () => {
        const userid = localStorage.getItem("user_id");
        const response = await fetch("http://localhost:8080/users/printId", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userid }),
        });
        const data = await response.json();

        setUserProfile(data);
        console.log(data);
    };

    useEffect(() => {
        getdata();
    }, []);

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>User Profile</h1>
                <div className="profile-details">
                    <p><strong>User ID:</strong> {userProfile?.user_id}</p>
                    <p><strong>Username:</strong> {userProfile?.username}</p>
                    <p><strong>User Type:</strong> {userProfile?.user_type}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
