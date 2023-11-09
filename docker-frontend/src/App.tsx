import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Helmet } from 'react-helmet';
import CarList from './CarList';

import CarForm from './CarForm';

function App() {
  return (
    <BrowserRouter> {/* Wrap your application in a BrowserRouter */}
      <Helmet><title>Sistem za konference</title></Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<p>Osnovna stran</p>} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/addCar" element={<CarForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
