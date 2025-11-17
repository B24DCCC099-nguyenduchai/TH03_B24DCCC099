import React from 'react';
import { useProducts, Product } from '../Context/ProductContext';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../Components/ProductForm';

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useProducts();
  const navigate = useNavigate();

  const product = state.products.find(p => p.id === Number(id));
  if (!product) return <p>Sản phẩm không tồn tại</p>;

  const handleSubmit = (updated: Product) => {
    dispatch({ type: 'UPDATE', payload: updated });
    navigate('/');
  };

  return (
    <div>
      <h1>Chỉnh sửa sản phẩm</h1>
      <ProductForm initial={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProduct;
