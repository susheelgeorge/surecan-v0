import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BuyerDashboard from './BuyerDashboard';
import ProductDetails from './ProductDetails';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BuyerDashboard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;