import React, { useState } from 'react';
import { Product } from '../Context/ProductContext';

interface Props {
  initial?: Product;
  onSubmit: (product: Product) => void;
}

const ProductForm = ({ initial, onSubmit }: Props) => {
  const [ten, setTen] = useState(initial?.ten || '');
  const [danhMuc, setDanhMuc] = useState(initial?.danhMuc || '');
  const [gia, setGia] = useState(initial?.gia || 0);
  const [soLuong, setSoLuong] = useState(initial?.soLuong || 0);
  const [moTa, setMoTa] = useState(initial?.moTa || '');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: string[] = [];
    if (ten.length < 3) errs.push('Tên sản phẩm tối thiểu 3 ký tự');
    if (gia <= 0) errs.push('Giá phải là số dương');
    if (soLuong <= 0) errs.push('Số lượng phải là số nguyên dương');
    if (!danhMuc) errs.push('Chọn danh mục');
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    onSubmit({ id: initial?.id || Date.now(), ten, danhMuc, gia, soLuong, moTa });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      {errors.map((e, i) => (
        <p key={i} style={{ color: 'red' }}>
          {e}
        </p>
      ))}
      <div>
        <label>Tên:</label>
        <input value={ten} onChange={e => setTen(e.target.value)} />
      </div>
      <div>
        <label>Danh mục:</label>
        <select value={danhMuc} onChange={e => setDanhMuc(e.target.value)}>
          <option value="">--Chọn--</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
      </div>
      <div>
        <label>Giá:</label>
        <input type="number" value={gia} onChange={e => setGia(Number(e.target.value))} />
      </div>
      <div>
        <label>Số lượng:</label>
        <input type="number" value={soLuong} onChange={e => setSoLuong(Number(e.target.value))} />
      </div>
      <div>
        <label>Mô tả:</label>
        <textarea value={moTa} onChange={e => setMoTa(e.target.value)} />
      </div>
      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProductForm;

