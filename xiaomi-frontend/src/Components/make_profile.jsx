import React, { useState } from 'react';


const Form = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [user_type, setUserType] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // const [username, setUsername] = useState('');
        // const [password, setpassword] = useState('');
        // const [userType, setUserType] = useState('');
       
        const student = {username, user_type, password}
        console.log(student)
        fetch("http://localhost:8080/service/add",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(student)

        }).then(()=>{
            console.log("new student added")
        } )

    };
 

    return (
        <div className="form-container">
            <h2>Create Profile</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="user_type">User Type</label>
                    <label htmlFor="usertype">Usertype</label>
                    <input type="text" className="form-control" id="user_type" name="user_type" placeholder="Enter username" value={user_type} onChange={(e) => setUserType(e.target.value)} />
                    {/* <select className="form-control" id="user_type" name="user_type" value={user_type} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select User Type</option>
                        <option value="warehouse">Warehouse</option>
                        <option value="service">Service Centre</option>
                    </select> */}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary"onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
