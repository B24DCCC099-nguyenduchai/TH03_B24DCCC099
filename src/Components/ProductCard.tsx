import React from 'react';
import { Product, useProducts } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: { product: Product }) => {
  const { dispatch } = useProducts();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      dispatch({ type: 'DELETE', payload: product.id });
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{product.ten}</h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <button onClick={() => navigate(`/products/${product.id}`)}>Xem chi tiết</button>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</button>
      <button onClick={handleDelete}>Xóa</button>
    </div>
  );
};

export default ProductCard;
