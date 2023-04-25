import React, { useState } from 'react';
import { Product } from '../../json/types/Product';
import './ModalCart.css';

function ModalCartItem({ product }: { product: Product }): JSX.Element {
//   const [quantity, setQuantity] = useState(1);

//   const dispatch = useAppDispatch();
//   dispatch(postOrder({ name, number, carts }));

//   const onClickQuantity = (): void => {
//     setQuantity((pre) => pre + 1);
//   };
  return (
    <div className="ModalCartItem">
      <img
        style={{ width: '40px', height: '40px' }}
        src={`${product.product_image}`}
        alt=""
      />
      <div>{product.product_price}</div>
      <div>{product.product_name}</div>
      {/* <button type="button" onClick={onClickQuantity}>
        +
      </button> */}
    </div>
  );
}

export default ModalCartItem;
