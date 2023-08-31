import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import RepairOrders from './Components/requirements'; 
import CreateUpdateRepairOrder from './Components/cust_home'; 
import Planning from './Components/planning'; 
import DispatchPlan from './Components/dispatch'; 
import SupportCenter from './Components/support_center'; 
import Profile from './Components/profile_page'; 
import SC_req from './Components/SC_requirements';
import Form from './Components/make_profile';
import Submit from './Components/submit_page';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/requirements" element={<RepairOrders />} />
                <Route path="/cust_home" element={<CreateUpdateRepairOrder />} />
                <Route path="/planning" element={<Planning />} />
                <Route path="/dispatch-plan" element={<DispatchPlan />} />
                <Route path="/support-center" element={<SupportCenter />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sc_requirements" element={<SC_req />} />
                <Route path='/make_profile' element={<Form />} />
                <Route path='/submit' element={<Submit />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
