import React from 'react';

const Pagination = ({
  total,
  perPage,
  current,
  onPageChange
}: {
  total: number;
  perPage: number;
  current: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '10px' }}>
      <button disabled={current === 1} onClick={() => onPageChange(current - 1)}>
        Previous
      </button>
      {pages.map(p => (
        <button
          key={p}
          style={{ fontWeight: current === p ? 'bold' : 'normal', margin: '0 2px' }}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={current === totalPages} onClick={() => onPageChange(current + 1)}>
        Next
      </button>
      <span style={{ marginLeft: '10px' }}>
        Tổng {total} sản phẩm - Trang {current}/{totalPages}
      </span>
    </div>
  );
};

export default Pagination;
