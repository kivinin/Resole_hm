import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { RootState } from '../../store';
import styles from './styles/services.module.scss';

function ProductList(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.products);

  return (
    <div
      id="products"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '100px 0 0 0',
        // paddingTop: '80px',
        // marginTop: '-80px',
      }}
      className={styles.productList__container}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
