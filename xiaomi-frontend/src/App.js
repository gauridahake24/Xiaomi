import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Components/make_profile';
import Welcome from './Components/welcome';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
