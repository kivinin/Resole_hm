import React from 'react';
import { Product } from '../../json/types/Product';
import './ModalCart.css';

function ModalCartItem({ product }: { product: Product }): JSX.Element {
  return (
    <div className="ModalCartItem">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{ width: '20%' }}>
                {' '}
                <img
                  style={{ width: '40px', height: '40px' }}
                  src={`${product.product_image}`}
                  alt=""
                />
              </th>
              <th scope="col" style={{ width: '30%' }}>
                {product.product_price} ₽
              </th>
              <th scope="col" style={{ width: '50%' }}>
                {product.product_name}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div style={{ borderBottom: '1px solid black', width: '600px' }} />
    </div>
  );
}

export default ModalCartItem;
