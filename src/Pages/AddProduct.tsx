import React from 'react';
import { useProducts, Product } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../Components/ProductForm';

const AddProduct = () => {
  const { dispatch } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (product: Product) => {
    dispatch({ type: 'ADD', payload: product });
    navigate('/');
  };

  return (
    <div>
      <h1>Thêm sản phẩm</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;
