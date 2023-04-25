import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addCart } from '../../json/jsonSlice';
import { Product } from '../../json/types/Product';
import './Product.css';

function ProductItem({ product }: { product: Product }): JSX.Element {
  const [dis, setDis] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div className="productItem">
      <h2>{product.product_name}</h2>
      <h2>{product.product_price}</h2>
      <h2>{product.product_description}</h2>
      <div>
        <img src={`${product.product_image}`} alt="" />
      </div>
      <button
        style={{ width: '100px', height: '50px' }}
        onClick={() => {
          dispatch(addCart(product.id));
          setDis(true);
        }}
        type="button"
        disabled={dis}
      >
        в корзину
      </button>
    </div>
  );
}

export default ProductItem;
