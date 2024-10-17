import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormCv from './compants/FormCv'; 
import Button from './compants/Buttoncv';
import AffichageCv from './AffichageCv';
import './App.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Button />} />
                <Route path="/FormCv" element={<FormCv />} />
                <Route path='/AffichageCv' element={<AffichageCv/>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
