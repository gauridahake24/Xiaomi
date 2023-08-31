// Profile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Profile = () => {
    const { id } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const getdata = async() => {
        
        const userid = localStorage.getItem("user_id")
        const response = await fetch ("http://localhost:8080/users/printId",{  
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id: userid})})
        const data = await response.json()

        setUserProfile(data)
        console.log(data)
    }
    useEffect(()=> {getdata()}, [])
    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>User Id: {userProfile?.user_id}</p>
            <p>Username: {userProfile?.username}</p>
            <p>User Type: {userProfile?.user_type}</p>
    
        </div>
    );
};

export default Profile;
