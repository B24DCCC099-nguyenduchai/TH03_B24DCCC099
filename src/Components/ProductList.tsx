import React, { useState } from 'react';
import { useProducts } from '../Context/ProductContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Filter from './Filter';

const ProductList = () => {
  const { state } = useProducts();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const filtered = state.products
    .filter(p => p.ten.toLowerCase().includes(search.toLowerCase()))
    .filter(p => (filterCategory ? p.danhMuc === filterCategory : true))
    .filter(p => p.gia >= (minPrice === '' ? 0 : Number(minPrice)))
    .filter(p => p.gia <= (maxPrice === '' ? Infinity : Number(maxPrice)));

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <Filter
        category={filterCategory}
        onCategoryChange={setFilterCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={setMinPrice}
        onMaxChange={setMaxPrice}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentProducts.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination total={filtered.length} perPage={productsPerPage} current={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ProductList;
