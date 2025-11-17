import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  soLuong: number;
  moTa: string;
}

type State = { products: Product[] };

type Action =
  | { type: 'ADD'; payload: Product }
  | { type: 'UPDATE'; payload: Product }
  | { type: 'DELETE'; payload: number };

const initialProducts: Product[] = [
  { id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia: 25000000, soLuong: 10, moTa: 'Smartphone cao cấp' },
  { id: 2, ten: 'Áo Thun Nam', danhMuc: 'Quần áo', gia: 150000, soLuong: 50, moTa: 'Áo thun cotton' },
  { id: 3, ten: 'Sách Toán', danhMuc: 'Sách', gia: 80000, soLuong: 20, moTa: 'Sách luyện thi' },
  { id: 4, ten: 'Bánh mì', danhMuc: 'Đồ ăn', gia: 15000, soLuong: 100, moTa: 'Bánh mì thơm ngon' },
  { id: 5, ten: 'Tai nghe Bluetooth', danhMuc: 'Điện tử', gia: 1200000, soLuong: 15, moTa: 'Tai nghe không dây' },
  { id: 6, ten: 'Quần Jeans', danhMuc: 'Quần áo', gia: 300000, soLuong: 30, moTa: 'Quần jeans nam' },
  { id: 7, ten: 'Sữa tươi', danhMuc: 'Đồ ăn', gia: 20000, soLuong: 80, moTa: 'Sữa tươi nguyên chất' },
  { id: 8, ten: 'Laptop Dell', danhMuc: 'Điện tử', gia: 18000000, soLuong: 5, moTa: 'Laptop cấu hình mạnh' },
  { id: 9, ten: 'Bút bi', danhMuc: 'Khác', gia: 10000, soLuong: 200, moTa: 'Bút bi chất lượng' },
  { id: 10, ten: 'Áo khoác', danhMuc: 'Quần áo', gia: 500000, soLuong: 25, moTa: 'Áo khoác mùa đông' }
];

const ProductContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return { products: [...state.products, action.payload] };
    case 'UPDATE':
      return { products: state.products.map(p => (p.id === action.payload.id ? action.payload : p)) };
    case 'DELETE':
      return { products: state.products.filter(p => p.id !== action.payload) };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { products: initialProducts });
  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};

