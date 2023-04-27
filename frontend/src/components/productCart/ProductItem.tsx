import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addCart } from '../../json/jsonSlice';
import { Product } from '../../json/types/Product';
import './Product.css';

function ProductItem({ product }: { product: Product }): JSX.Element {
  const [dis, setDis] = useState(false);
  const dispatch = useAppDispatch();
  const clickModal = (): void => {
    setDis((prev) => !prev);
  };
  return (
    <article className="card">
      <img
        className="card__background"
        src={`${product.product_image}`}
        alt="Pho"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{product.product_name}</h2>
          <p className="card__description">{product.product_price}₽</p>
          <p className="card__description">{product.product_description}</p>
        </div>
        <button
          type="button"
          disabled={dis}
          className="card__button"
          onClick={() => {
            dispatch(addCart(product.id));
            clickModal();
          }}
        >
          Купить
        </button>
      </div>
    </article>
  );
}

export default ProductItem;
