import React from 'react';

const SearchBar = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ padding: '5px', marginBottom: '10px', width: '300px' }}
    />
  );
};

export default SearchBar;
