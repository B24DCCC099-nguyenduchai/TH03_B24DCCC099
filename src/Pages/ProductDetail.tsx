import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../Context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useProducts();
  const navigate = useNavigate();

  const product = state.products.find(p => p.id === Number(id));

  if (!product) return <p>Sản phẩm không tồn tại</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.ten}</h1>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;
