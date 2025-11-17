import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import AddProduct from './Pages/AddProduct';
import EditProduct from './Pages/EditProduct';

const App: React.FC = () => (
  <ProductProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  </ProductProvider>
);

export default App;
