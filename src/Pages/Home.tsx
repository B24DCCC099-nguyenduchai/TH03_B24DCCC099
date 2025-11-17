import React from 'react';
import ProductList from '../Components/ProductList';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách sản phẩm</h1>
      <ProductList />
    </div>
  );
};

export default Home;
