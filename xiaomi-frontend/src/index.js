import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import RepairOrders from './Components/create_order'; 
import CreateUpdateRepairOrder from './Components/cust_home'; 
import Planning from './Components/planning'; 
import DispatchPlan from './Components/dispatch'; 
import Profile from './Components/profile_page'; 
import SC_req from './Components/SC_requirements';
import Form from './Components/make_profile';
import Submit from './Components/submit_page';
import Welcome from './Components/welcome';
import LoginPage from './Components/login';
import Warehouse from './Components/warehouse';
import Startpage from './Components/start_page';
import DispatchOrder from './Components/order_dispatched';
import All_orders from './Components/all_cust_orders';
import Submit1 from './Components/submit_page_cust';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/create-order" element={<RepairOrders />} />
                <Route path="/" element={<Startpage />} />
                <Route path="/cust_home" element={<CreateUpdateRepairOrder />} />
                <Route path="/planning" element={<Planning />} />
                <Route path="/dispatch" element={<DispatchPlan />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/sc_requirements" element={<SC_req />} />
                <Route path='/make_profile' element={<Form />} />
                <Route path='/submit' element={<Submit />} />
                <Route path='/welcome' element={<Welcome />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/warehouse' element={<Warehouse />} />
                <Route path='/order_dispatched' element={<DispatchOrder />} />
                <Route path='/customer_orders' element={<All_orders />} />
                <Route path='/submit-page-cust' element={<Submit1 />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
