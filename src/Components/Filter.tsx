import React from 'react';

const categories = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

const Filter = ({
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange
}: {
  category: string;
  onCategoryChange: (v: string) => void;
  minPrice: number | '';
  maxPrice: number | '';
  onMinChange: (v: number | '') => void;
  onMaxChange: (v: number | '') => void;
}) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <select value={category} onChange={e => onCategoryChange(e.target.value)}>
        <option value="">Tất cả danh mục</option>
        {categories.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Giá min"
        value={minPrice}
        onChange={e => onMinChange(e.target.value === '' ? '' : Number(e.target.value))}
        style={{ marginLeft: '5px', width: '80px' }}
      />
      <input
        type="number"
        placeholder="Giá max"
        value={maxPrice}
        onChange={e => onMaxChange(e.target.value === '' ? '' : Number(e.target.value))}
        style={{ marginLeft: '5px', width: '80px' }}
      />
    </div>
  );
};

export default Filter;
