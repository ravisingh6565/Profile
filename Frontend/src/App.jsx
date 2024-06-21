import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/component/Navbar';
import FormComponent from './pages/Form/FormComponent';
import Footer from './pages/component/Footer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/form" element={<FormComponent />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
