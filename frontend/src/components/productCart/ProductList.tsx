import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { RootState } from '../../store';

function ProductList(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.products);

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
